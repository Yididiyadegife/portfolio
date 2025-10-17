
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-800 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Yididiya's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}
