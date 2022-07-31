const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/dwa-icon.svg"
            alt="Deploy with Alejandro logo"
            className="w-8"
          />
          <div className="uppercase text-sm tracking-wider">Deploy with Alejandro</div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://silvioalejandro.net" className="hover:text-pink-600">
            Silvio Alejandro Catalano
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
