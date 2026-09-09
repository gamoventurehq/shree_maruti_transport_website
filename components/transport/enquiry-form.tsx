'use client';

import { useRef, useState, type SubmitEvent } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { formatEnquiry } from '@/lib/enquiry';

export function EnquiryForm() {
  const [draft, setDraft] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>(
    'idle',
  );
  const outputRef = useRef<HTMLTextAreaElement>(null);
  function prepare(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputs = form.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >('input[required], textarea[required]');
    for (const input of inputs) {
      input.setCustomValidity(
        input.value.trim() ? '' : 'Please enter this detail.',
      );
      if (!input.reportValidity()) return;
    }
    const data = new FormData(form);
    const value = (key: string) => {
      const entry = data.get(key);
      return typeof entry === 'string' ? entry : '';
    };
    setDraft(
      formatEnquiry({
        name: value('name'),
        company: value('company'),
        email: value('email'),
        pickup: value('pickup'),
        delivery: value('delivery'),
        cargo: value('cargo'),
      }),
    );
    setCopyState('idle');
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
      outputRef.current?.focus();
      outputRef.current?.select();
    }
  }
  return (
    <form
      className="enquiry-form"
      onSubmit={prepare}
      onInput={(event) => {
        const target = event.target;
        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement
        )
          target.setCustomValidity('');
        setDraft('');
        setCopyState('idle');
      }}
    >
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Full name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Company
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            maxLength={150}
          />
        </label>
      </div>
      <label>
        Email address <span>*</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          maxLength={254}
        />
      </label>
      <div className="form-grid">
        <label>
          Pickup location <span>*</span>
          <input
            name="pickup"
            placeholder="City or town"
            required
            maxLength={150}
          />
        </label>
        <label>
          Delivery location <span>*</span>
          <input
            name="delivery"
            placeholder="City or town"
            required
            maxLength={150}
          />
        </label>
      </div>
      <label>
        What are you moving? <span>*</span>
        <textarea
          name="cargo"
          placeholder="Cargo, approximate weight, preferred date, and anything else we should know."
          rows={3}
          required
          maxLength={3000}
        />
      </label>
      <p className="form-note">
        This form prepares a draft to copy. It does not send or store your
        enquiry.
      </p>
      <button className="button button-primary" type="submit">
        Prepare enquiry <ArrowUpRight size={19} />
      </button>
      {draft && (
        <div className="enquiry-result">
          <h3>Your enquiry draft is ready</h3>
          <label htmlFor="enquiry-draft">Review and copy your details</label>
          <textarea
            id="enquiry-draft"
            ref={outputRef}
            readOnly
            value={draft}
            rows={10}
          />
          <button
            className="text-link copy-button"
            type="button"
            onClick={copy}
          >
            {copyState === 'copied' ? 'Copied' : 'Copy enquiry'}
            {copyState === 'copied' ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <output aria-live="polite">
            {copyState === 'copied'
              ? 'Copied to your clipboard. This enquiry has not been sent.'
              : copyState === 'failed'
                ? 'Automatic copy is unavailable. The draft is selected so you can copy it manually.'
                : 'This draft stays on this page. No message has been sent.'}
          </output>
        </div>
      )}
    </form>
  );
}
