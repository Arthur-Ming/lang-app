type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => (
  <main className="flex flex-grow items-center justify-center">
    <div className="w-[600px] rounded-lg bg-section-dark p-10">{children}</div>
  </main>
);

export default AuthLayout;
