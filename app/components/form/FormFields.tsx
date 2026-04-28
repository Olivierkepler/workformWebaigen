export function StepCard({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-950">{title}</h2>
        <div className="space-y-5">{children}</div>
      </section>
    );
  }
  
  export function Input({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    required = false,
  }: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
    placeholder?: string;
    required?: boolean;
  }) {
    return (
      <label className="block">
        <span className="font-medium text-gray-800">{label}</span>
        <input
          className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </label>
    );
  }
  
  export function Textarea({
    label,
    name,
    value,
    onChange,
    placeholder,
  }: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
  }) {
    return (
      <label className="block">
        <span className="font-medium text-gray-800">{label}</span>
        <textarea
          className="mt-2 min-h-28 w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    );
  }
  
  export function Select({
    label,
    name,
    value,
    onChange,
    children,
  }: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    children: React.ReactNode;
  }) {
    return (
      <label className="block">
        <span className="font-medium text-gray-800">{label}</span>
        <select
          className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          name={name}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      </label>
    );
  }