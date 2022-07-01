import { useRouter } from "next/router";
import { GuestLayout } from "../components/Layouts/GuestLayout";

export default function Login() {

  const router = useRouter()

  const login = () => router.push('/dashboard')

  return (
    <GuestLayout>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 border border-slate-200 rounded-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
              Login into your account
            </h2>
            <p className="mt-2 text-center text-md text-slate-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:underline hover:decoration-slate-300 hover:decoration-1 hover:underline-offset-4"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 focus:z-10"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 focus:z-10"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-slate-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-md text-slate-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-md">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:underline hover:decoration-slate-300 hover:decoration-1 hover:underline-offset-4"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={login}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm uppercase font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
