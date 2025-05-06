export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
  
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Support</a>
          </div>
        </div>
      </footer>
    );
  }
  