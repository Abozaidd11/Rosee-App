// import EmailStep from "./_components/af-task/email-step";
// import NewPasswordStep from "./_components/af-task/new-password-step";

import OtpStep from "./_components/otp-step";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto w-full container">
      {/* <EmailStep /> */}
      <OtpStep />
      {/* <NewPasswordStep email={""} /> */}
    </main>
  );
}
