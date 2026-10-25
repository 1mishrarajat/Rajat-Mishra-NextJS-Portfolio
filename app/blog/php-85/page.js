
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Layers3,
  LockKeyhole,
  Monitor,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
  Bug,
  ChevronRight,
} from "lucide-react";

const sections = [
  ["What is PHP?", "what-is-php"],
  ["Security alert", "security-alert"],
  ["Understanding the risk", "understanding-risk"],
  ["How to fix it", "how-to-fix"],
  ["PHP 8.5 features", "php-features"],
  ["Upgrade checklist", "upgrade-checklist"],
  ["Key takeaways", "summary"],
];

const fixedVersions = [
  ["PHP 8.5", "8.5.12+"],
  ["PHP 8.4", "8.4.27+"],
  ["PHP 8.3", "8.3.36+"],
  ["PHP 8.2", "8.2.35+"],
];

const features = [
  {
    number: "01",
    icon: Workflow,
    title: "Pipe operator",
    description:
      "Pass a value through multiple transformations from left to right.",
    code: `$name = "  RAJAT  ";

$result = $name
    |> trim(...)
    |> strtolower(...);

echo $result; // rajat`,
    detail:
      "Useful for readable data transformations. Each operation receives the result of the previous operation.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Built-in URI extension",
    description:
      "Work with structured URIs using PHP's built-in URI APIs.",
    code: `use Uri\\Rfc3986\\Uri;

$uri = new Uri(
    "https://example.com/products?id=10"
);

echo $uri->getHost(); // example.com`,
    detail:
      "Useful for API integrations and URL manipulation. Validate destinations before making requests or redirects.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Clone with property updates",
    description:
      "Create an object copy while updating selected properties.",
    code: `$user = new User("Rajat", "Developer");

$updated = clone($user, [
    "role" => "Senior Developer"
]);`,
    detail:
      "Helpful for immutable-style objects and data transfer objects. The original object remains unchanged.",
  },
  {
    number: "04",
    icon: Database,
    title: "Array helper functions",
    description:
      "Retrieve the first or last value in an array more conveniently.",
    code: `$users = ["Amit", "Rajat", "Priya"];

echo array_first($users); // Amit
echo array_last($users);  // Priya`,
    detail:
      "Both functions return null for an empty array. The last value is not automatically the newest database record.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "NoDiscard attribute",
    description:
      "Mark return values that should not be silently ignored.",
    code: `#[\\NoDiscard]
function calculateTotal(
    float $price,
    int $quantity
): float {
    return $price * $quantity;
}

$total = calculateTotal(500, 2);
echo $total; // 1000`,
    detail:
      "PHP can warn when a marked return value is ignored. This helps developers notice mistakes but does not replace validation or testing.",
  },
];

function SectionTitle({ number, eyebrow, title, description }) {
  return (
    <div >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2DDD5] text-sm font-bold text-[#8B443F]">
          {number}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A6504A]">
          {eyebrow}
        </span>
      </div>

      <h2 className="display-font text-3xl leading-tight tracking-tight text-[#211D1A] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3  text-[15px] leading-7 text-[#71665D]">
          {description}
        </p>
      )}
    </div>
  );
}

function Code({ children, label = "PHP example" }) {
  return (
    <div className="my-5 min-w-0 overflow-hidden rounded-2xl border border-[#303743] bg-[#171B22] shadow-[0_14px_35px_rgba(23,27,34,0.12)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F18B82]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E9C46A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#83C995]" />
        </div>
        <span className="text-[11px] font-medium text-slate-400">
          {label}
        </span>
      </div>

      <pre className="max-w-full overflow-x-auto p-4 font-mono text-[12px] leading-7 text-[#E8EDF5] sm:p-5 sm:text-sm">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ title, children, type = "info" }) {
  const styles = {
    info: "border-[#E8D2C4] bg-[#FFF0E7] text-[#713D35]",
    warning: "border-red-200 bg-red-50 text-red-900",
    success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  };

  const Icon =
    type === "warning"
      ? AlertTriangle
      : type === "success"
        ? ShieldCheck
        : BookOpen;

  return (
    <div className={`my-6 rounded-2xl border p-5 sm:p-6 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <div className="mt-2 text-sm leading-7 opacity-90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex shrink-0 flex-col items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A3F48] text-sm font-bold text-white">
          {number}
        </span>
        {number !== "06" && (
          <span className="mt-2 w-px flex-1 bg-[#E8DCD2]" />
        )}
      </div>

      <div className="min-w-0 flex-1 pb-2">
        <h3 className="text-base font-bold text-[#211D1A]">
          {title}
        </h3>
        <div className="mt-2 text-sm leading-7 text-[#71665D]">
          {children}
        </div>
      </div>
    </div>
  );
}

function SecurityFlowDiagram() {
  const stages = [
    {
      number: "01",
      title: "Public request",
      text: "An attacker sends a crafted HTTP request. Signing in may not be required.",
      tone: "border-[#E8DCD2] bg-white",
      badge: "bg-[#F8EEE6] text-[#7A3F48]",
    },
    {
      number: "02",
      title: "PHP runtime",
      text: "An affected, unpatched runtime processes the request in a vulnerable way.",
      tone: "border-red-200 bg-red-50",
      badge: "bg-red-100 text-red-800",
    },
    {
      number: "03",
      title: "Possible compromise",
      text: "Successful exploitation could let an attacker run code on the server.",
      tone: "border-red-200 bg-red-50",
      badge: "bg-red-100 text-red-800",
    },
  ];

  return (
    <figure className="my-8 overflow-hidden rounded-[26px] border border-[#E8DCD2] bg-[#FCF5EF] p-5 sm:p-7">
      <figcaption className="mb-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A6504A]">
          Visual explanation
        </p>
        <h3 className="mt-2 text-xl font-bold text-[#211D1A] sm:text-2xl">
          How a vulnerable PHP runtime can be exploited
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#71665D]">
          This is a simplified risk model, not an exploit demonstration. The
          actual conditions and impact depend on the server configuration.
        </p>
      </figcaption>

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
        {stages.map((stage, index) => (
          <Fragment key={stage.number}>
            <div className={`rounded-2xl border p-4 ${stage.tone}`}>
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-extrabold ${stage.badge}`}>
                {stage.number}
              </span>
              <h4 className="mt-3 font-bold text-[#211D1A]">{stage.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[#71665D]">{stage.text}</p>
            </div>
            {index < stages.length - 1 && (
              <div className="flex items-center justify-center py-1 text-[#A6504A]" aria-hidden="true">
                <ArrowRight className="rotate-90 md:rotate-0" size={22} />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="text-sm font-bold">The practical response</p>
          <p className="mt-1 text-sm leading-6">
            Upgrade the PHP runtime to the fixed release for your supported
            branch, then verify the version used by actual web requests.
            Application-level validation alone is not a substitute for this
            runtime security update.
          </p>
        </div>
      </div>
    </figure>
  );
}

export default function Php85ArticlePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF9F4] pt-[76px] text-[#211D1A]">
        <article>
          {/* HERO SECTION */}
          <header className="relative isolate overflow-hidden border-b border-[#EAD7C7] bg-[#F8EEE6]">
                  <div className="container-page grid items-center gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 ">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-bold text-red-800">
                  <AlertTriangle size={15} />
                  Critical PHP security advisory
                </div>

                <h1 className="display-font mt-6 max-w-3xl text-[clamp(2.6rem,5.4vw,4.7rem)] leading-[1.02] tracking-[-0.05em]">
                  Critical PHP
                  <span className="mt-2 block font-serif font-normal italic text-[#A6504A]">
                    Security Alert
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#71665D] sm:text-lg">
                  Understand critical PHP security vulnerabilities, learn why
                  vulnerable PHP runtimes put websites at risk, and discover
                  how to check your version, apply security updates, and test
                  your application.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#security-alert"
                    className="inline-flex items-center gap-2 rounded-full bg-[#7A3F48] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#603039]"
                  >
                    Read security guide <ArrowRight size={16} />
                  </a>

                  <a
                    href="#what-is-php"
                    className="inline-flex items-center gap-2 rounded-full border border-[#D8BFB0] bg-white/70 px-5 py-3 text-sm font-bold text-[#713D35] transition hover:bg-white"
                  >
                    Learn PHP basics <BookOpen size={16} />
                  </a>
                </div>

            
        
              </div>

              <div className="relative mx-auto w-full max-w-[500px]">
                <div className="absolute -inset-3 rounded-[30px] bg-white/60 blur-xl" />
                <div className="relative overflow-hidden rounded-[24px] border border-[#E6D2C4] bg-white shadow-[0_24px_65px_rgba(63,42,27,0.16)]">
                  <Image
                    src="/images/php-85.png"
                    alt="PHP 8.5 programming guide cover"
                    width={1024}
                    height={1536}
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="h-auto w-full object-cover"
                  />
                </div>

              </div>
            </div>
          </header>

          <div className="container-page grid min-w-0 gap-10 py-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            <div className="min-w-0">
              {/* WHAT IS PHP */}
              <section id="what-is-php" className="scroll-mt-32">
                <SectionTitle
                  number="01"
                  eyebrow="Start with the basics"
                  title="What is PHP?"
                   />

                <p className="text-[16px] leading-8 text-[#625950]">
                  PHP is a server-side programming language used to build
                  dynamic websites, REST APIs, content management systems,
                  and e-commerce applications. It allows developers to
                  process requests, validate form data, implement business
                  logic, communicate with databases, and return responses
                  to browsers.
                </p>

<div className="my-8 grid gap-4 sm:grid-cols-3">
  {[
    {
      number: "01",
      icon: Monitor,
      title: "Frontend",
      subtitle: "Client Side",
      text: "The browser renders the interface, displays content, and sends HTTP requests to the backend.",
      tags: ["HTML", "CSS", "JavaScript"],
      iconBg: "bg-[#F7E5DF]",
      iconColor: "text-[#A6504A]",
      numberColor: "text-[#A6504A]",
    },
    {
      number: "02",
      icon: Server,
      title: "PHP Backend",
      subtitle: "Server Side",
      text: "PHP processes requests, validates input, handles business logic, and generates responses.",
      tags: ["Validation", "Logic", "Authentication"],
      iconBg: "bg-[#7A3F48]",
      iconColor: "text-white",
      numberColor: "text-[#7A3F48]",
    },
    {
      number: "03",
      icon: Database,
      title: "Database",
      subtitle: "Data Layer",
      text: "Stores and retrieves application data, such as user accounts, products, and orders.",
      tags: ["MySQL", "CRUD"],
      iconBg: "bg-[#E8EFE4]",
      iconColor: "text-[#426B43]",
      numberColor: "text-[#426B43]",
    },
  ].map(
    ({
      number,
      icon: Icon,
      title,
      subtitle,
      text,
      tags,
      iconBg,
      iconColor,
      numberColor,
    }) => (
      <div
        key={title}
        className="group relative overflow-hidden rounded-2xl border border-[#E8DCD2] bg-white p-5 shadow-[0_4px_18px_rgba(80,50,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C97989] hover:shadow-[0_12px_30px_rgba(122,63,72,0.10)]"
      >
        {/* Icon and Number */}
        <div className="flex items-center justify-between">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${iconBg}`}
          >
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>

          <span
            className={`text-sm font-bold tracking-widest opacity-70 ${numberColor}`}
          >
            {number}
          </span>
        </div>

        {/* Title and Subtitle in One Row */}
        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="text-base font-bold tracking-tight text-[#29221F]">
            {title}
          </h3>

          <span className="rounded-full bg-[#F9E8E5] px-2 py-1 text-[10px] font-semibold text-[#A6504A]">
            {subtitle}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-[#71665D]">
          {text}
        </p>

        {/* Technology Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E8DCD2] bg-[#FFF9F4] px-2.5 py-1 text-[10px] font-medium text-[#71665D]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A6504A] transition-all duration-300 group-hover:w-full" />
      </div>
    )
  )}
</div>

                <div className="rounded-2xl border border-[#E8DCD2] bg-white p-5 sm:p-6">
                  <h3 className="font-bold text-[22px] ">How PHP works</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ["01", "Browser", "A user requests a page."],
                      ["02", "Web server", "The request is routed to PHP."],
                      ["03", "PHP runtime", "PHP executes the server-side code."],
                      ["04", "Database", "Data is queried or updated if needed."],
                      ["05", "Response", "The server returns HTML or JSON."],
                      ["06", "Browser", "The result is displayed to the user."],
                    ].map(([number, title, text]) => (
                      <div key={number} className="flex gap-3 rounded-xl bg-[#FFF9F4] p-4">
                        <span className="text-[14px] font-bold text-[#A6504A]">{number}</span>
                        <div>
                          <h4 className="text-[15px] font-bold">{title}</h4>
                          <p className="mt-1 text-[16px] leading-5 text-[#71665D]">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Code label="Simple PHP example">{`<?php
$name = "Rajat";

echo "Hello, " . $name . "!";

// Output: Hello, Rajat!`}</Code>

              </section>

              {/* SECURITY ALERT */}
              <section id="security-alert" className="mt-8">
                <div className="rounded-[26px] border border-red-200 bg-red-50 p-5 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                      <AlertTriangle size={25} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-800">
                        Security advisory · October 21, 2026
                      </p>

                      <h2 className="display-font mt-2 text-2xl leading-tight text-red-950 sm:text-3xl">
                        Critical PHP vulnerabilities
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-red-900/80">
                        On October 21, 2026, the PHP team announced two critical vulnerabilities
                        (CVE-2026-109618 and CVE-2026-109619) that may allow
                        unauthenticated remote code execution. “Unauthenticated”
                        means an attacker may not need to sign in first. The PHP
                        team says there is no complete workaround: install the
                        appropriate fixed PHP release. Check the official notice
                        and your hosting provider's package details before making
                        a production change.
                      </p>

                      <a
                        href="https://www.php.net/archive/2026.php#2026-10-21-5"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-900 underline underline-offset-4"
                      >
                        Read official security advisory <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <SectionTitle
                    number="02"
                    eyebrow="Understand the problem"
                    title="What is the security issue?"
                    description="Remote code execution is a serious risk because it may allow an attacker to execute code on a vulnerable server."
                  />

                  <p className="text-[15px] leading-8 text-[#625950]">
                    Think of PHP as the engine that runs the server-side part of a website.
                    Updating your React components, WordPress theme, Laravel code,
                    or database does not automatically update that engine. If the
                    PHP runtime handling web requests is vulnerable, an attacker
                    may be able to exploit the runtime before your application's
                    own protections run. The exact exposure depends on the server
                    setup; PHP identifies Apache mod_php as the highest-risk setup
                    in this advisory. Treat the official PHP notice as the source
                    of truth for affected builds and instructions.
                  </p>

                  <SecurityFlowDiagram />

                  <div className="my-6 rounded-2xl border border-[#E8DCD2] bg-white p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-[#211D1A]">
                      Important terms, explained simply
                    </h3>
                    <dl className="mt-4 space-y-4">
                      <div>
                        <dt className="font-bold text-[#7A3F48]">Vulnerability</dt>
                        <dd className="mt-1 text-sm leading-6 text-[#71665D]">
                          A weakness in software that may be abused to make it
                          behave in an unintended or unsafe way.
                        </dd>
                      </div>
                      <div>
                        <dt className="font-bold text-[#7A3F48]">Remote code execution (RCE)</dt>
                        <dd className="mt-1 text-sm leading-6 text-[#71665D]">
                          A severe class of flaw in which an attacker can cause
                          code to run on a remote system. If successful, this can
                          threaten the server and the applications or data it can access.
                        </dd>
                      </div>
                      <div>
                        <dt className="font-bold text-[#7A3F48]">Unauthenticated</dt>
                        <dd className="mt-1 text-sm leading-6 text-[#71665D]">
                          The attacker may not need a valid account or login
                          session before attempting the attack.
                        </dd>
                      </div>
                      <div>
                        <dt className="font-bold text-[#7A3F48]">PHP runtime</dt>
                        <dd className="mt-1 text-sm leading-6 text-[#71665D]">
                          The installed PHP interpreter and related components
                          that execute PHP code on your server.
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        icon: Bug,
                        title: "Vulnerable runtime",
                        text: "A server runs a PHP build that does not contain the relevant security fixes.",
                      },
                      {
                        icon: Globe,
                        title: "Potential exploitation",
                        text: "A specially crafted request may trigger a vulnerability under the conditions described in the advisory.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Potential impact",
                        text: "Depending on the vulnerability, successful exploitation can compromise the server or application.",
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <div key={title} className="flex gap-4 rounded-2xl border border-[#E8DCD2] bg-white p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold">{title}</h3>
                          <p className="mt-1 text-sm leading-7 text-[#71665D]">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* PATCHED VERSIONS */}
              <section id="understanding-risk" className="mt-16 scroll-mt-32 sm:mt-20">
                <SectionTitle
                  number="03"
                  eyebrow="Check your installation"
                  title="Which PHP versions are patched?"
                  description="Verify the fixed release for your branch against the official advisory and your hosting provider's package information."
                />

                <div className="overflow-hidden rounded-2xl border border-[#E8DCD2] bg-white">
                  <div className="grid grid-cols-2 gap-3 border-b border-[#E8DCD2] bg-[#F8EEE6] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#713D35]">
                    <span>PHP branch</span>
                    <span>Reported fixed release</span>
                  </div>

                  {fixedVersions.map(([branch, version]) => (
                    <div key={branch} className="grid grid-cols-2 items-center gap-3 border-b border-[#F0E7E0] px-4 py-4 last:border-0">
                      <span className="text-sm font-semibold">{branch}</span>
                      <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
                        {version}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-6 text-[#71665D]">
                  These are the PHP team's fixed releases for the two vulnerabilities
                  announced on October 21, 2026, not a guarantee that each branch
                  is suitable for every project. Confirm your vendor's package
                  version and whether any security backport is documented. A fixed
                  release does not protect against every other vulnerability.
                </p>

                <Callout title="Application updates are not runtime patches" type="warning">
                  Updating WordPress, Magento, Laravel, or a theme does not
                  necessarily update the PHP runtime. Verify the PHP version
                  that actually serves web requests.
                </Callout>
              </section>

              {/* FIX GUIDE */}
              <section id="how-to-fix" className="mt-16 scroll-mt-32 sm:mt-20">
                <SectionTitle
                  number="04"
                  eyebrow="Practical remediation"
                  title="How to fix the PHP security issue"
                  description="Check compatibility, back up your application, apply the appropriate fixed runtime, and test before production deployment."
                />

                <Step number="01" title="Check the PHP CLI version">
                  Run this command in your terminal:

                  <Code label="Terminal">{`php -v`}</Code>

                  It displays the PHP version available to your command line. For example,
                  your terminal might use PHP 8.5 while your website still runs PHP
                  8.4 through Apache or PHP-FPM. That mismatch is why this check is
                  necessary but not sufficient.
                </Step>

                <Step number="02" title="Check the web-server version">
                  Review PHP-FPM, Apache, LiteSpeed, or your hosting control panel and ask
                  your host which PHP package serves the domain. If you create a
                  temporary PHP diagnostic page, restrict access to it and delete
                  it immediately after checking; do not leave phpinfo() publicly
                  accessible. A CLI version check alone does not prove that website
                  requests use a patched build.
                </Step>

                <Step number="03" title="Check framework compatibility">
                  Review your exact Laravel, CodeIgniter, Magento, WordPress,
                  Composer dependencies, and PHP extensions. Select a fixed
                  version supported by the project and hosting environment.
                </Step>

                <Step number="04" title="Back up your application">
                  Back up source code, database data, environment configuration,
                  and deployment settings. Prepare a rollback plan before
                  changing the runtime.
                </Step>

                <Step number="05" title="Install the appropriate fixed package">
                  Use an official PHP distribution or trusted operating-system
                  or hosting-provider package. Confirm the patch level for the
                  actual runtime that serves the website.
                </Step>

                <Step number="06" title="Test and verify">
                  Test authentication, forms, APIs, database operations,
                  scheduled tasks, and important pages. Review PHP and
                  application logs after deployment.
                </Step>

                <Callout title="Useful verification commands">
                  <Code label="Terminal">{`php -v
composer check-platform-reqs`}</Code>
                  Run Composer checks from your project directory. Also verify
                  the web-server runtime independently; these commands alone
                  cannot prove that a live website is patched.
                </Callout>
              </section>

              {/* PHP FEATURES */}
              <section id="php-features" className="mt-16 scroll-mt-32 sm:mt-20">
                <SectionTitle
                  number="05"
                  eyebrow="Learn the language"
                  title="Useful PHP 8.5 features"
                  description="PHP 8.5 introduced these language improvements. They are separate from the
                    October 2026 security fixes and do not themselves remediate the
                    vulnerabilities described above. Use these examples only on a
                    PHP 8.5-compatible environment."
                />

                <div className="space-y-5">
                  {features.map(({ number, icon: Icon, title, description, code, detail }) => (
                    <div key={number} className="rounded-[24px] border border-[#E8DCD2] bg-white p-5 sm:p-7">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8EEE6] text-[#A6504A]">
                          <Icon size={22} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A6504A]">
                            Feature {number}
                          </p>
                          <h3 className="mt-1 text-xl font-bold">{title}</h3>
                          <p className="mt-2 text-sm leading-7 text-[#71665D]">
                            {description}
                          </p>
                        </div>
                      </div>

                      <Code label="PHP 8.5 example">{`<?php\n${code}`}</Code>

                      <div className="flex gap-3 rounded-xl bg-[#FFF9F4] p-4">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#A6504A]" />
                        <p className="text-sm leading-7 text-[#625950]">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Callout title="Test new syntax before using it">
                  Confirm that your installed PHP version supports each feature.
                  Run examples in a development environment before introducing
                  newer syntax into a project running an older PHP version.
                </Callout>
              </section>

              {/* CHECKLIST */}
              <section id="upgrade-checklist" className="mt-16 scroll-mt-32 sm:mt-20">
                <SectionTitle
                  number="06"
                  eyebrow="Production readiness"
                  title="PHP upgrade checklist"
                  description="Use this checklist before considering the upgrade complete."
                />

                <div className="space-y-3">
                  {[
                    "Identify the PHP version serving real web requests.",
                    "Confirm the fixed package or verified vendor backport.",
                    "Check framework, Composer, and extension compatibility.",
                    "Back up code, database, and configuration.",
                    "Test critical user journeys in staging.",
                    "Verify the live runtime and review logs.",
                    "Keep a tested rollback plan available.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-[#E8DCD2] bg-white p-4">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                      <p className="text-sm leading-6 text-[#625950]">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SUMMARY */}
              <section id="summary" className="mt-16 scroll-mt-32 rounded-[26px] bg-[#211D1A] p-6 text-white sm:mt-20 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E5A486]">
                  <ShieldCheck size={25} />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5A486]">
                  Key takeaways
                </p>

                <h2 className="display-font mt-3 text-3xl leading-tight sm:text-4xl">
                  Secure the runtime. Test the application. Verify the fix.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  PHP security updates and new language features serve different
                  purposes. Respond to security advisories with the appropriate
                  fixed runtime, check compatibility, and validate the deployed
                  result.
                </p>

                <Link
                  href="/blog"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E5A486] px-5 py-3 text-sm font-bold text-[#211D1A] transition hover:bg-white"
                >
                  Explore more articles <ArrowRight size={16} />
                </Link>
              </section>

              {/* OFFICIAL REFERENCES */}
              <section className="mt-10 border-t border-[#E8DCD2] pt-7">
                <h2 className="flex items-center gap-2 font-bold">
                  <BookOpen size={19} className="text-[#A6504A]" />
                  Official references
                </h2>

                <ul className="mt-4 space-y-3 text-sm leading-6">
                  {[
                    ["October 21, 2026 PHP security advisory", "https://www.php.net/archive/2026.php#2026-10-21-5"],
                    ["PHP 8.5 release announcement", "https://www.php.net/releases/8.5/en.php"],
                    ["PHP changelog", "https://www.php.net/ChangeLog-8.php"],
                    ["PHP 8.5 migration guide", "https://www.php.net/manual/en/migration85.php"],
                    ["PHP official downloads", "https://www.php.net/downloads.php"],
                  ].map(([title, url]) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[#92553D] underline decoration-[#D5B3A2] underline-offset-4 hover:text-[#211D1A]"
                      >
                        {title} <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs leading-6 text-[#8A7D73]">
                  Educational content. Verify the current official advisory
                  and vendor instructions before deploying a security update.
                </p>
              </section>
            </div>

            {/* TABLE OF CONTENTS */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-[#E8DCD2] bg-white/95 p-5 shadow-[0_10px_35px_rgba(63,42,27,0.05)] backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A6504A]">
                  <BookOpen size={14} className="mr-2 inline" />
                  On this page
                </p>

                <nav aria-label="Article table of contents" className="mt-4 space-y-1">
                  {sections.map(([label, id], index) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-[#625950] transition hover:bg-[#FFF0E7] hover:text-[#A6504A]"
                    >
                      <span className="pt-0.5 text-[10px] font-bold text-[#B99A89]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{label}</span>
                      <ChevronRight size={14} className="mt-0.5 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  ))}
                </nav>

                <div className="mt-5 rounded-xl bg-[#F8EEE6] p-4">
                  <ShieldCheck size={18} className="text-[#A6504A]" />
                  <p className="mt-2 text-xs font-bold text-[#713D35]">
                    Quick reminder
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#71665D]">
                    Check the PHP runtime used by your website, not only
                    the CLI version.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
