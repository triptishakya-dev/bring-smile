// emails/ThankYouEmail.jsx
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

export default function DonationEmail({ name, donationAmount }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your donation of ₹{donationAmount}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans text-base text-gray-800">
          <Container className="max-w-xl mx-auto p-6 border border-gray-200 rounded-md shadow-sm">
            <Heading className="text-xl font-bold text-indigo-600 mb-4">
              Thank you, {name}!
            </Heading>

            <Text className="mb-4">
              We sincerely appreciate your generous donation of ₹{donationAmount}.
            </Text>

            <Text className="mb-4">
              Your contribution helps us continue our mission and support those in need. We're truly grateful for your support.
            </Text>

            <Hr className="my-4 border-gray-300" />

            <Text className="text-sm text-gray-600">
              With gratitude,<br />
              <strong>Tripti Shakya</strong><br />
              Donation Team<br />
              📧 contact@triptishakya.dev
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
