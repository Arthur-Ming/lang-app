type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => (
  <main className="mt-7 flex flex-grow justify-center">
    <div className="w-[600px] rounded-lg p-10">{children}</div>
  </main>
);

export default AuthLayout;
