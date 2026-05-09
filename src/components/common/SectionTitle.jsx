const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="space-y-5 max-w-3xl">

      {eyebrow && (
        <p className="uppercase tracking-[0.35em] text-sm text-textSecondary">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-textSecondary text-lg leading-relaxed">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;