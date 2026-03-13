import React from "react";

function BaseIcon({ className = "h-5 w-5", children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

/**
 * PUBLIC_INTERFACE
 * Home icon.
 */
export function IconHome({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M10.5 2.75 3 9v11.25c0 .966.784 1.75 1.75 1.75H9.5V15.5h5V22h4.75c.966 0 1.75-.784 1.75-1.75V9l-7.5-6.25a2 2 0 0 0-2.5 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * User icon.
 */
export function IconUser({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M12 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 12 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 21a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Layers icon.
 */
export function IconLayers({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M12 3.5 3.5 8l8.5 4.5L20.5 8 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12 12 16.5 20.5 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 16 12 20.5 20.5 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Settings icon.
 */
export function IconSettings({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.5 12a7.59 7.59 0 0 0-.08-1.1l2.03-1.58-2-3.46-2.46 1a7.77 7.77 0 0 0-1.9-1.1l-.37-2.64h-4l-.37 2.64c-.67.27-1.31.64-1.9 1.1l-2.46-1-2 3.46 2.03 1.58A7.6 7.6 0 0 0 4.5 12c0 .37.03.74.08 1.1L2.55 14.68l2 3.46 2.46-1c.59.46 1.23.83 1.9 1.1l.37 2.64h4l.37-2.64c.67-.27 1.31-.64 1.9-1.1l2.46 1 2-3.46-2.03-1.58c.05-.36.08-.73.08-1.1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Sparkles icon.
 */
export function IconSparkles({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M12 2.5l1.2 4.2L17.4 8 13.2 9.2 12 13.4 10.8 9.2 6.6 8l4.2-1.3L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 12.5l.7 2.4 2.4.7-2.4.7-.7 2.4-.7-2.4-2.4-.7 2.4-.7.7-2.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Check-circle icon.
 */
export function IconCheckCircle({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m7.5 12.2 2.7 2.6 6.3-6.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Compass icon.
 */
export function IconCompass({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14.7 9.3 13 13l-3.7 1.7L11 11l3.7-1.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Briefcase icon.
 */
export function IconBriefcase({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M9 6.5V5.75C9 4.784 9.784 4 10.75 4h2.5C14.216 4 15 4.784 15 5.75v.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 8.5h15v8.75c0 .966-.784 1.75-1.75 1.75H6.25c-.966 0-1.75-.784-1.75-1.75V8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 12h15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Shield icon.
 */
export function IconShield({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M12 2.8 19.5 6v6.2c0 5-3.2 8.8-7.5 9.9-4.3-1.1-7.5-4.9-7.5-9.9V6L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

/**
 * PUBLIC_INTERFACE
 * Send icon.
 */
export function IconSend({ className }) {
  return (
    <BaseIcon className={className}>
      <path
        d="M21 3 10.2 14.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21 3 14.5 21l-3.2-7.6L3 10.2 21 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}
