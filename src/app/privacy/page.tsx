export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Statement</h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8 text-lg text-gray-600">
              At 2DIGITS, we are committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Statement explains how we collect, use, and
              safeguard your data.
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Information We Collect</h2>

              <p className="mb-4 text-gray-700">
                We may collect the following types of information:
              </p>

              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Personal identification information (name, email address, phone number)</li>

                <li>Technical information about your device and browser</li>

                <li>Usage data and analytics about how you interact with our website</li>

                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                How We Use Your Information
              </h2>

              <p className="mb-4 text-gray-700">
                We use the collected information for the following purposes:
              </p>

              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700">
                <li>To provide and maintain our services</li>

                <li>To communicate with you about our products and services</li>

                <li>To improve our website and user experience</li>

                <li>To comply with legal obligations</li>

                <li>To protect against fraud and security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Data Protection</h2>

              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your
                personal data against unauthorized access, alteration, disclosure, or destruction.
                Your data is stored securely and is only accessible by authorized personnel who need
                it to perform their job functions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Your Rights</h2>

              <p className="mb-4 text-gray-700">
                Under applicable data protection laws, you have the right to:
              </p>

              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Access your personal data</li>

                <li>Correct inaccurate or incomplete data</li>

                <li>Request deletion of your data</li>

                <li>Object to or restrict processing of your data</li>

                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Cookies</h2>

              <p className="text-gray-700">
                Our website uses cookies to enhance your browsing experience and provide
                personalized content. You can manage your cookie preferences through your browser
                settings. However, disabling certain cookies may affect the functionality of our
                website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Third-Party Services</h2>

              <p className="text-gray-700">
                We may use third-party services for analytics, advertising, and other purposes.
                These services may have their own privacy policies, and we encourage you to review
                them. We are not responsible for the privacy practices of third-party websites or
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Changes to This Policy</h2>

              <p className="text-gray-700">
                We may update this Privacy Statement from time to time to reflect changes in our
                practices or applicable laws. We will notify you of any material changes by posting
                the updated policy on our website with a new effective date.
              </p>
            </section>

            <section className="rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact Us</h2>

              <p className="mb-4 text-gray-700">
                If you have any questions about this Privacy Statement or our data practices, please
                contact us:
              </p>

              <div className="text-gray-700">
                <p className="mb-2">
                  <strong>Email:</strong> privacy@2digits.com
                </p>

                <p className="mb-2">
                  <strong>Address:</strong> 2DIGITS Agency, [Your Address]
                </p>

                <p>
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </section>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">Last updated: August 5, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
