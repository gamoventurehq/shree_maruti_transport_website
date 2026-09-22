'use client';

import { useRef, useState, type SubmitEvent } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { business } from '@/content/business';
import { enquirySubject, formatEnquiry } from '@/lib/enquiry';

export function EnquiryForm({
  directSendEnabled,
}: {
  directSendEnabled: boolean;
}) {
  const [draft, setDraft] = useState('');
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'sending' | 'sent' | 'failed'
  >('idle');
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>(
    'idle',
  );
  const outputRef = useRef<HTMLTextAreaElement>(null);
  const emailHref = draft
    ? `mailto:${business.email}?subject=${encodeURIComponent(enquirySubject)}&body=${encodeURIComponent(draft)}`
    : '';
  async function submit(event: SubmitEvent<HTMLFormElement>) {
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
    const enquiry = {
      name: value('name'),
      company: value('company'),
      email: value('email'),
      pickup: value('pickup'),
      delivery: value('delivery'),
      cargo: value('cargo'),
    };
    const prepared = formatEnquiry(enquiry);
    setCopyState('idle');

    if (!directSendEnabled) {
      setDraft(prepared);
      return;
    }

    setSubmissionState('sending');
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...enquiry, website: value('website') }),
      });
      if (!response.ok) throw new Error('Enquiry delivery failed');
      form.reset();
      setDraft('');
      setSubmissionState('sent');
    } catch {
      setDraft(prepared);
      setSubmissionState('failed');
    }
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
      onSubmit={submit}
      onInput={(event) => {
        const target = event.target;
        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement
        )
          target.setCustomValidity('');
        setDraft('');
        setCopyState('idle');
        setSubmissionState('idle');
      }}
    >
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Full name"
            disabled={submissionState === 'sending'}
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
            disabled={submissionState === 'sending'}
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
          disabled={submissionState === 'sending'}
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
            disabled={submissionState === 'sending'}
            required
            maxLength={150}
          />
        </label>
        <label>
          Delivery location <span>*</span>
          <input
            name="delivery"
            placeholder="City or town"
            disabled={submissionState === 'sending'}
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
          disabled={submissionState === 'sending'}
          required
          maxLength={3000}
        />
      </label>
      <div className="enquiry-honeypot" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            autoComplete="off"
            tabIndex={-1}
            disabled={submissionState === 'sending'}
          />
        </label>
      </div>
      <p className="form-note">
        {directSendEnabled
          ? `Send your enquiry directly to ${business.email}.`
          : 'Prepare your enquiry, then open it in your email app to send it to us. You can also copy the details.'}
      </p>
      <button
        className="button button-primary"
        type="submit"
        disabled={submissionState === 'sending'}
      >
        {submissionState === 'sending'
          ? 'Sending…'
          : directSendEnabled
            ? 'Send enquiry'
            : 'Prepare enquiry'}
        {submissionState !== 'sending' && <ArrowUpRight size={19} />}
      </button>
      {submissionState === 'sent' && (
        <output className="form-status">
          Your enquiry was submitted to our team.
        </output>
      )}
      {submissionState === 'failed' && (
        <output className="form-status form-status-error" role="alert">
          We couldn’t confirm that your enquiry was sent. You can send the draft
          below from your email app.
        </output>
      )}
      {draft && (!directSendEnabled || submissionState === 'failed') && (
        <div className="enquiry-result">
          <h3>
            {submissionState === 'failed'
              ? 'Send by email instead'
              : 'Your enquiry draft is ready'}
          </h3>
          <label htmlFor="enquiry-draft">Review your details</label>
          <textarea
            id="enquiry-draft"
            ref={outputRef}
            readOnly
            value={draft}
            rows={10}
          />
          <div className="enquiry-actions">
            <a className="button button-primary" href={emailHref}>
              Open email app <ArrowUpRight size={19} />
            </a>
            <button
              className="text-link copy-button"
              type="button"
              onClick={copy}
            >
              {copyState === 'copied' ? 'Copied' : 'Copy enquiry'}
              {copyState === 'copied' ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
          <output aria-live="polite">
            {copyState === 'copied'
              ? 'Copied to your clipboard.'
              : copyState === 'failed'
                ? 'Automatic copy is unavailable. The draft is selected so you can copy it manually.'
                : 'Send this draft from your email app.'}
          </output>
        </div>
      )}
    </form>
  );
}
