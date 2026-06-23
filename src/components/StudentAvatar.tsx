type StudentAvatarProps = {
  compact?: boolean;
  label?: string;
};

export function StudentAvatar({ compact = false, label }: StudentAvatarProps) {
  return (
    <div
      className={compact ? "student-avatar student-avatar--compact" : "student-avatar"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className="avatar-shadow" />
      <span className="avatar-body" />
      <span className="avatar-head" />
      <span className="avatar-bag" />
      <span className="avatar-leg avatar-leg--left" />
      <span className="avatar-leg avatar-leg--right" />
    </div>
  );
}
