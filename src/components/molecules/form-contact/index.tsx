import { useEmailStore } from "@/src/store/email";

export default function FormContact() {
  const { form, sendEmail } = useEmailStore();

  return (
    <div className="h-full flex flex-col">
      <header className="mb-6">
        <span className="text-2xl font-normal">SAY SOMETHING</span>
      </header>
      <div className="grow">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Name *"
              required
              className="border-b border-slate-500 focus:ring-0 focus:outline-none py-3"
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Email *"
              required
              className="border-b border-slate-500 focus:ring-0 focus:outline-none py-3"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            required
            className="mt-4 border-b border-slate-500 focus:ring-0 focus:outline-none py-3"
          />

          <textarea
            name="message"
            placeholder="Your message *"
            required
            className="mt-4 border-b border-slate-500 focus:ring-0 focus:outline-none py-3 h-32 resize-none"
          />

          <div className="mt-auto flex justify-end pt-4">
            <button
              className="bg-galaxy text-white py-3 px-6 rounded hover:bg-galaxy_core transition duration-300 cursor-pointer"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
