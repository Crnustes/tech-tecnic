export default function Loading() {
  return (
    <div className="fixed inset-0 bg-t_dark flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-t_primary/20 border-t-t_primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-t_primary to-t_accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
