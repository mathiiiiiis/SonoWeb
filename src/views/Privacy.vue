<template>
  <div class="legal-page">
    <div class="legal-container">
      <header class="legal-header">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: October 1, 2025</p>
      </header>

      <div class="legal-content">
        <section>
          <h2>1. Data Controller</h2>
          <p>The data controller within the meaning of the General Data Protection Regulation (GDPR) is:</p>
          <address>
            Mathis Laarmanns<br>
            North Rhine-Westphalia, Germany<br>
            Email: business@mathiiis.de
          </address>
        </section>

        <section>
          <h2>2. Principles of Data Processing</h2>
          <p>We process your personal data in accordance with the principles of the GDPR:</p>
          <ul>
            <li>Lawfulness, fairness, and transparency</li>
            <li>Purpose limitation</li>
            <li>Data minimization</li>
            <li>Accuracy</li>
            <li>Storage limitation</li>
            <li>Integrity and confidentiality</li>
          </ul>
        </section>

        <section>
          <h2>3. Legal Basis for Processing</h2>
          <p>The processing of personal data is based on:</p>
          <ul>
            <li><strong>Art. 6(1)(a) GDPR</strong> - Consent</li>
            <li><strong>Art. 6(1)(b) GDPR</strong> - Contract performance</li>
            <li><strong>Art. 6(1)(f) GDPR</strong> - Legitimate interests</li>
            <li><strong>Art. 6(1)(c) GDPR</strong> - Legal obligation</li>
          </ul>
        </section>

        <section>
          <h2>4. Types of Data Processed</h2>
          
          <h3>4.1 Account Data (Sono Accounts API) - OPTIONAL</h3>
          <p><strong>Registration provides access to Sono API Features.</strong> If you create a Sono Account, we collect:</p>
          <ul>
            <li>Username</li>
            <li>Email address</li>
            <li>Password (encrypted)</li>
            <li>Profile picture (optional)</li>
          </ul>
          <p><strong>What you can do with a Sono Account:</strong></p>
          <ul>
            <li>Upload songs to the Sono CDN (Content Delivery Network)</li>
            <li>Create playlists with your uploaded songs</li>
            <li>Access your content from any device</li>
          </ul>
          <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)<br>
          <strong>Storage duration:</strong> Until account deletion<br>
          <strong>Note:</strong> You can use the App without an account for all local features</p>

          <h3>4.2 Music Library and Metadata</h3>
          <p><strong>Local (No Account Required):</strong></p>
          <ul>
            <li>Titles, artists, albums of local music files</li>
            <li>Playback history (stored locally on your device)</li>
            <li>Local playlists and favorites</li>
          </ul>
          <p><strong>Cloud-Based (Sono Account Required):</strong></p>
          <ul>
            <li>Songs uploaded to Sono CDN</li>
            <li>Playlists created with uploaded songs</li>
            <li>Cloud playlist metadata</li>
          </ul>
          <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)<br>
          <strong>Storage location:</strong> Local data on your device only; Uploaded songs on Sono CDN (requires account)</p>

          <h3>4.3 Uploaded Songs (Sono Account Feature)</h3>
          <p>If you have a Sono Account and upload songs to the CDN:</p>
          <ul>
            <li>Song files (audio content)</li>
            <li>Metadata (title, artist, album, duration)</li>
            <li>Upload timestamp</li>
            <li>Associated user account</li>
          </ul>
          <p><strong>Purpose:</strong> To create playlists with your uploaded songs and access them across devices.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)<br>
          <strong>Storage location:</strong> Sono CDN (Content Delivery Network)<br>
          <strong>Storage duration:</strong> Until you delete the content or your account</p>

          <h3>4.4 Device Information</h3>
          <ul>
            <li>Device model and operating system version</li>
            <li>App version</li>
            <li>Unique device ID (for session management)</li>
            <li>IP address (temporarily for jam sessions)</li>
          </ul>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest in functionality)<br>
          <strong>Storage duration:</strong> Until session termination/disconnection</p>

          <h3>4.5 Anonymous Usage Statistics and Crash Data - COLLECTED BY DEFAULT</h3>
          <p><strong>We collect anonymous analytics and crash data to improve the App.</strong> This includes:</p>
          <ul>
            <li>App usage duration and session frequency</li>
            <li>Features used (aggregated, no individual tracking)</li>
            <li>Crash reports and error logs (anonymized, no personal data)</li>
            <li>Performance metrics (load times, resource usage)</li>
            <li>Device type and OS version (for compatibility)</li>
          </ul>
          <div class="important-box">
            <p><strong>Important:</strong></p>
            <ul>
              <li>This data is fully anonymized and cannot be linked to you</li>
              <li>No personally identifiable information is included</li>
              <li>You can opt out at any time in Settings → "Send Anonymous Analytics"</li>
            </ul>
          </div>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest in app improvement)<br>
          <strong>Storage duration:</strong> 12 months, then automatic deletion<br>
          <strong>Opt-out:</strong> Settings → Send Anonymous Analytics (toggle off)</p>

          <h3>4.6 Location Data (Optional)</h3>
          <p>For personalized content and recommendations:</p>
          <ul>
            <li>Approximate location (city level, only with your consent)</li>
          </ul>
          <p><strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent)<br>
          <strong>Withdrawal:</strong> Device settings at any time</p>

          <h3>4.7 Microphone, Camera, and Photo Access (Optional)</h3>
          <ul>
            <li><strong>Microphone:</strong> For voice features and audio recording</li>
            <li><strong>Camera:</strong> For QR code scanning (jam sessions) and profile pictures</li>
            <li><strong>Photo Library:</strong> For selecting profile pictures</li>
          </ul>
          <p><strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent)<br>
          <strong>Usage:</strong> Only when actively using the feature</p>
        </section>

        <section>
          <h2>5. Data Sharing with Third Parties</h2>

          <h3>5.1 Last.fm API</h3>
          <p>When Last.fm scrobbling is enabled, we transmit:</p>
          <ul>
            <li>Song title, artist, album</li>
            <li>Playback timestamp</li>
            <li>Your Last.fm username</li>
          </ul>
          <p><strong>Recipient:</strong> Last FM Limited, UK<br>
          <strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent)<br>
          <strong>Privacy Policy:</strong> <a href="https://www.last.fm/legal/privacy" target="_blank" rel="noopener">https://www.last.fm/legal/privacy</a></p>

          <h3>5.2 MusicBrainz API</h3>
          <p>For music metadata (album release dates):</p>
          <ul>
            <li>Artist name, album title (as search query)</li>
          </ul>
          <p><strong>Recipient:</strong> MetaBrainz Foundation<br>
          <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)<br>
          <strong>Privacy Policy:</strong> <a href="https://metabrainz.org/privacy" target="_blank" rel="noopener">https://metabrainz.org/privacy</a></p>

          <h3>5.3 lrclib API</h3>
          <p>For lyrics retrieval:</p>
          <ul>
            <li>Song title, artist (as search query)</li>
          </ul>
          <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)</p>

          <h3>5.4 No Sale or Marketing</h3>
          <p>Your data is <strong>never sold</strong> or shared with third parties for advertising purposes.</p>
        </section>

        <section>
          <h2>6. Jam Sessions (Audio Streaming)</h2>
          <p><strong>Host Mode:</strong> As a jam session host, a temporary server is created on your device. Your local IP address is visible to connected clients.</p>
          <p><strong>Client Mode:</strong> As a participant, your IP address is visible to the host. You receive audio streams from the host.</p>
          <p><strong>Important:</strong> Jam sessions are peer-to-peer between devices. We do not store any audio data on our servers.</p>
          <p><strong>Duration:</strong> Only during active session</p>
        </section>

        <section>
          <h2>7. Data Security</h2>
          <p>We implement technical and organizational measures:</p>
          <ul>
            <li>Encrypted transmission (TLS/SSL)</li>
            <li>Encrypted password storage (hashing)</li>
            <li>Regular security updates</li>
            <li>Server access restrictions</li>
            <li>Secure audio streaming connections</li>
          </ul>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>You have the following rights under the GDPR:</p>

          <h3>8.1 Right to Access (Art. 15 GDPR)</h3>
          <p>You can request information about the data stored about you at any time.</p>

          <h3>8.2 Right to Rectification (Art. 16 GDPR)</h3>
          <p>Incorrect data will be corrected immediately upon your request.</p>

          <h3>8.3 Right to Erasure (Art. 17 GDPR)</h3>
          <p>You can request deletion of your data, provided there are no legal retention obligations.</p>
          <p><strong>With Account:</strong> Request account deletion at business@mathiiis.de<br>
          <strong>Without Account:</strong> Simply delete the app to remove all local data</p>

          <h3>8.4 Right to Data Portability (Art. 20 GDPR)</h3>
          <p>You can receive your data in a structured, machine-readable format.</p>

          <h3>8.5 Withdrawal of Consent (Art. 7(3) GDPR)</h3>
          <p>You can withdraw any consent given at any time:</p>
          <ul>
            <li><strong>Analytics & Crash Data:</strong> Settings → Send Anonymous Analytics (toggle off)</li>
            <li><strong>Last.fm:</strong> Settings → Last.fm → Scrobbling (toggle off)</li>
            <li><strong>Permissions:</strong> Device Settings → Sono → Permissions</li>
          </ul>

          <h3>8.6 Right to Lodge a Complaint (Art. 77 GDPR)</h3>
          <p>You have the right to lodge a complaint with a data protection supervisory authority:</p>
          <address>
            <strong>For Germany:</strong><br>
            Die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit<br>
            Graurheindorfer Str. 153<br>
            53117 Bonn<br>
            Phone: +49 (0)228-997799-0<br>
            Email: poststelle@bfdi.bund.de<br>
            Website: <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener">https://www.bfdi.bund.de</a>
          </address>
        </section>

        <section>
          <h2>9. Age Requirements</h2>
          <p><strong>Using the App:</strong> No age restriction - anyone can use the App</p>
          <p><strong>Creating a Sono Account:</strong> Users must be at least <strong>13 years old</strong>, or meet the minimum age required by law in their country of residence, whichever is higher. Users under 18 may require parental consent depending on local laws.</p>
        </section>

        <section>
          <h2>10. What We DO NOT Collect</h2>
          <div class="highlight-box">
            <p>We <strong>explicitly do NOT</strong> collect:</p>
            <ul>
              <li>Your local music files (except songs you choose to upload to Sono CDN with an account)</li>
              <li>Conversation content or messages</li>
              <li>Contact lists</li>
              <li>Calendars or other personal data</li>
              <li>Payment information (as the App is free)</li>
              <li>Biometric data</li>
              <li>Precise GPS coordinates (only approximate location if enabled)</li>
              <li>Personal identifiers in analytics (all analytics are anonymous)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>11. Cookies and Local Storage</h2>
          <p>The App does not use cookies. However, it stores data locally on your device (e.g., playlists, playback history, preferences) to provide basic functionality. 
          This data remains on your device and is not transmitted to us.</p>
        </section>

        <section>
          <h2>12. Dispute Resolution</h2>
          <p>The EU Online Dispute Resolution platform has been discontinued as of July 20, 2025 (Regulation EU 2024/3228). 
          For information on consumer redress bodies in the EU, please visit 
          <a href="https://consumer-redress.ec.europa.eu/dispute-resolution-bodies" target="_blank" rel="noopener">
            https://consumer-redress.ec.europa.eu/dispute-resolution-bodies
          </a>.
          </p>
        </section>

        <section>
          <h2>13. Changes to This Privacy Policy</h2>
          <p>We reserve the right to update this Privacy Policy to reflect changes in legal requirements or App functionality.</p>
          <p>The current version is always available on <a href="https://sono.wtf/privacy">https://sono.wtf/privacy</a></p>
          <p>You will be notified of significant changes via in-app notification or email (if you have an account).</p>
        </section>
      </div>

      <footer class="legal-footer">
        <h3>Contact</h3>
        <p>For questions about data protection or to exercise your rights, please contact us:</p>
        <p>
          Email: <a href="mailto:business@mathiiis.de">business@mathiiis.de</a><br>
          Mathis Laarmanns<br>
          North Rhine-Westphalia, Germany
        </p>
        <p class="compliance-note">
          This Privacy Policy complies with the requirements of the GDPR, the German Federal Data Protection Act (BDSG), 
          and the Telecommunications-Telemedia Data Protection Act (TTDSG).
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  metaInfo: {
    title: 'Privacy Policy - Sono',
    meta: [
      {
        name: 'description',
        content: 'Privacy Policy and GDPR compliance for Sono Music Player'
      }
    ]
  }
}
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: #ffffff;
  color: #333;
  padding: 8rem 1rem 2rem;
}

.legal-container {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.legal-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #000;
}

.legal-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.last-updated {
  color: #666;
  font-size: 0.95rem;
  font-weight: 500;
}

.legal-content section {
  margin-bottom: 2.5rem;
}

.legal-content h2 {
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 600;
}

.legal-content h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 1.5rem 0 1rem;
  font-weight: 600;
}

.legal-content p {
  line-height: 1.8;
  margin-bottom: 1rem;
  color: #333;
}

.legal-content ul {
  margin: 1rem 0 1rem 2rem;
  line-height: 1.8;
}

.legal-content li {
  margin-bottom: 0.5rem;
  color: #333;
}

.legal-content strong {
  color: #000;
  font-weight: 600;
}

.legal-content a {
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
  transition: opacity 0.3s ease;
  word-break: break-all;
}

.legal-content a:hover {
  opacity: 0.6;
}

address {
  font-style: normal;
  line-height: 1.8;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-left: 3px solid #000;
  margin: 1rem 0;
}

.important-box,
.highlight-box {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid #000;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.important-box p,
.highlight-box p {
  margin-bottom: 0.5rem;
}

.important-box ul,
.highlight-box ul {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
}

.legal-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}

.legal-footer h3 {
  color: #000;
  margin-bottom: 1rem;
  font-weight: 600;
}

.legal-footer a {
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
  transition: opacity 0.3s ease;
}

.legal-footer a:hover {
  opacity: 0.6;
}

.compliance-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .legal-page {
    padding: 6rem 1rem 2rem;
  }

  .legal-container {
    padding: 2rem 1.5rem;
  }

  .legal-header h1 {
    font-size: 2rem;
  }

  .legal-content h2 {
    font-size: 1.3rem;
  }

  .legal-content h3 {
    font-size: 1.1rem;
  }

  .important-box,
  .highlight-box {
    padding: 1rem;
  }
}
</style>