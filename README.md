# City of Galena Park — Water Bill Email Enrollment

Static HTML site designed for GitHub + Netlify Forms.

## Files

- `index.html` — enrollment form
- `success.html` — confirmation page
- `styles.css` — city-styled responsive layout
- `script.js` — email-match and file-size/type validation
- `netlify.toml` — static publish settings and security headers

## Netlify setup

1. Push this folder to a GitHub repository.
2. In Netlify, create/import a site from the GitHub repository.
3. Publish directory: `.` (project root). No build command is required.
4. In Netlify, enable **Forms / form detection** for the site.
5. Deploy the site once. Netlify should detect the form named:
   `water-bill-email-enrollment`.
6. Submit a test request and confirm the submission appears in the Netlify Forms dashboard.
7. Configure only the staff notifications/access that are actually needed.

## IMPORTANT: ID uploads contain PII

This form accepts an uploaded copy of a government-issued photo ID.

Netlify's documentation specifically recommends additional security for forms
with PII file uploads, including its Very Good Security (VGS) integration.
Do not treat a default Netlify Forms deployment as the final production
security configuration for ID documents.

Also establish a City-approved retention/deletion procedure for:
- the form submission,
- the uploaded ID,
- any exported copies,
- email notifications containing submission information.

Limit Netlify team access to staff who actually process utility enrollment.

## Form behavior

Required information:
- account holder full legal name
- water service address
- utility account number
- billing email address
- matching email confirmation
- government-issued photo ID
- identity certification
- data-use acknowledgment
- verification acknowledgment

The front end limits the ID file to 7 MB so the full multipart request stays
under Netlify's 8 MB request limit with room for the other fields.

## Privacy wording

The form intentionally does **not** promise absolute secrecy or permanent
destruction of records. It says the City uses the information to verify the
account and administer e-billing, while noting that governmental records may
be retained, protected, or disclosed as required by applicable law.

Have the City Attorney/records officer approve the final privacy language and
retention schedule before production use.

## Official City logo

The site includes the official City of Galena Park logo at:

`assets/city-logo.png`

Both the enrollment page and confirmation page use the local logo asset.
