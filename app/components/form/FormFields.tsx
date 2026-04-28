export function StepCard({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section className="space-y-5">
        <header className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
            {title}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Answer a few questions — you can keep it high-level.
          </p>
        </header>
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
    hint,
  }: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
    placeholder?: string;
    required?: boolean;
    hint?: string;
  }) {
    return (
      <label className="block">
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {label}
          {required ? (
            <span className="ml-1 text-zinc-400 dark:text-zinc-500">*</span>
          ) : null}
        </span>
        <input
          className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-[15px] text-zinc-950 shadow-sm outline-none ring-0 transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:ring-4 focus:ring-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-50 dark:focus:bg-zinc-950 dark:focus:ring-zinc-50/10"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        {hint ? (
          <span className="mt-2 block text-xs text-zinc-500 dark:text-zinc-400">
            {hint}
          </span>
        ) : null}
      </label>
    );
  }
  
  export function Textarea({
    label,
    name,
    value,
    onChange,
    placeholder,
    hint,
  }: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    hint?: string;
  }) {
    return (
      <label className="block">
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {label}
        </span>
        <textarea
          className="mt-2 min-h-28 w-full resize-y rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-[15px] text-zinc-950 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:ring-4 focus:ring-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-50 dark:focus:bg-zinc-950 dark:focus:ring-zinc-50/10"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {hint ? (
          <span className="mt-2 block text-xs text-zinc-500 dark:text-zinc-400">
            {hint}
          </span>
        ) : null}
      </label>
    );
  }
  
  export function Select({
    label,
    name,
    value,
    onChange,
    children,
    hint,
  }: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    children: React.ReactNode;
    hint?: string;
  }) {
    return (
      <label className="block">
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {label}
        </span>
        <div className="relative mt-2">
          <select
            className="w-full appearance-none rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 pr-10 text-[15px] text-zinc-950 shadow-sm outline-none transition focus:border-zinc-950 focus:bg-white focus:ring-4 focus:ring-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-50 dark:focus:border-zinc-50 dark:focus:bg-zinc-950 dark:focus:ring-zinc-50/10"
            name={name}
            value={value}
            onChange={onChange}
          >
            {children}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
          >
            <path
              fill="currentColor"
              d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z"
            />
          </svg>
        </div>
        {hint ? (
          <span className="mt-2 block text-xs text-zinc-500 dark:text-zinc-400">
            {hint}
          </span>
        ) : null}
      </label>
    );
  }