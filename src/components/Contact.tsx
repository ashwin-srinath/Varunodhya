import { useEffect, useRef, useState, type FormEvent } from 'react';
import { company } from '../config/site';
import { magneticMove, magneticLeave } from '../utils/interactions';
import { USE_TOPICS_EVENT } from './Training';

type Field = 'name' | 'email' | 'org' | 'interest' | 'message';
type Errors = Partial<Record<Field, string>>;

const interests = [
  'Professional Training',
  'Consultancy Services',
  'Expert Talent & Capacity Building',
  'Collaboration / Careers',
  'Other',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = 'dea420cb-2253-4cbd-ba7a-93539ff6af9f';

export default function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: '',
    email: '',
    org: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Receives selected topics from the Training section's "use in enquiry" link.
  useEffect(() => {
    function onUseTopics(e: Event) {
      const list = (e as CustomEvent<string>).detail;
      if (!list) return;

      setValues((v) => {
        if (v.message.includes('Topics of interest:')) return v;

        const prefix = `Topics of interest: ${list}\n\n`;

        return {
          ...v,
          message: v.message.trim() ? prefix + v.message : prefix,
        };
      });
    }

    window.addEventListener(USE_TOPICS_EVENT, onUseTopics);

    return () => window.removeEventListener(USE_TOPICS_EVENT, onUseTopics);
  }, []);

  const set =
    (field: Field) =>
    (e: { target: { value: string } }) =>
      setValues((v) => ({
        ...v,
        [field]: e.target.value,
      }));

  function validate(): Errors {
    const next: Errors = {};

    if (!values.name.trim()) {
      next.name = 'Please enter your name.';
    }

    if (!EMAIL_RE.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }

    if (!values.interest) {
      next.interest = 'Please select an area of interest.';
    }

    if (values.message.trim().length < 10) {
      next.message = 'Please add a short message (at least 10 characters).';
    }

    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const next = validate();
    setErrors(next);

    const first = (Object.keys(next) as Field[])[0];

    if (first) {
      setStatus('');

      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();

      return;
    }

    setSending(true);
    setStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,

          name: values.name.trim(),
          email: values.email.trim(),
          organization: values.org.trim() || '—',
          interest: values.interest,
          message: values.message.trim(),

          subject: `New Enquiry from Website — ${values.name.trim()}`,
          from_name: 'Varunodhya Consultancy Services',

          // Sends the enquiry to the email associated with your Web3Forms account.
          to: company.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        setValues({
          name: '',
          email: '',
          org: '',
          interest: '',
          message: '',
        });

        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setStatus('error');
    } finally {
      setSending(false);
    }
  }

  const err = (f: Field) => errors[f] ?? '';

  return (
    <section id="contact">
      <div className="wrap split">
        <div className="rev">
          <p className="eyebrow">Contact</p>

          <h2 style={{ fontSize: 'clamp(1.9rem,4vw,3rem)' }}>
            Let's discuss how specialized knowledge and interdisciplinary
            expertise can support your next project.
          </h2>

          <div className="meta">
            <div>
              <b>Email</b>
              {company.email}
            </div>

            <div>
              <b>Telephone</b>
              {company.phone}
            </div>

            <div>
              <b>Registered Address</b>
              {company.address}
            </div>
          </div>
        </div>

        <div className="rev">
          <form ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="f full">
              <label htmlFor="n">Name</label>

              <input
                id="n"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={!!err('name')}
              />

              <p className="err">{err('name')}</p>
            </div>

            <div className="f">
              <label htmlFor="e">Email</label>

              <input
                id="e"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                aria-invalid={!!err('email')}
              />

              <p className="err">{err('email')}</p>
            </div>

            <div className="f">
              <label htmlFor="o">Organization</label>

              <input
                id="o"
                name="org"
                autoComplete="organization"
                value={values.org}
                onChange={set('org')}
              />

              <p className="err" />
            </div>

            <div className="f full">
              <label htmlFor="s">Area of interest</label>

              <select
                id="s"
                name="interest"
                value={values.interest}
                onChange={set('interest')}
                aria-invalid={!!err('interest')}
              >
                <option value="">Select an area</option>

                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>

              <p className="err">{err('interest')}</p>
            </div>

            <div className="f full">
              <label htmlFor="m">Message</label>

              <textarea
                id="m"
                name="message"
                value={values.message}
                onChange={set('message')}
                aria-invalid={!!err('message')}
              />

              <p className="err">{err('message')}</p>
            </div>

            <div className="f full">
              <button
                className="btn solid"
                type="submit"
                style={{ justifySelf: 'start' }}
                onMouseMove={magneticMove}
                onMouseLeave={magneticLeave}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>

            <p id="status" role="status" aria-live="polite">
              {status === 'success' && (
                <span style={{ color: 'var(--cy)' }}>
                  Thank you. Your enquiry has been sent successfully.
                </span>
              )}

              {status === 'error' && (
                <span style={{ color: '#ff8a8a' }}>
                  Something went wrong while sending your enquiry. Please try
                  again or email us directly at {company.email}.
                </span>
              )}
            </p>
          </form>

          <p
            style={{
              color: '#5d6b79',
              fontSize: '12.5px',
              marginTop: 18,
            }}
          >
            Your enquiry will be securely submitted through our online contact
            form and delivered to {company.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
