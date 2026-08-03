export default function Footer() {
    return (
      <footer className="bg-primary w-full">
        <div className="flex flex-col p-[20px] gap-[40px] w-full items-end max-w-[1440px] mx-auto lg:p-[50px] lg:flex-row lg:justify-between">
          <div className="flex flex-1 gap-[10px] lg:gap-[80px]">
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-[22px] font-bold text-accent w-full">
                PIK-R SAGA
              </h3>
              <p className="w-full text-background">
                Empowering Youth Excellence through peer support and education.
              </p>
            </div>
            <ul className="flex flex-col text-background w-full gap-[15px] lg:w-[188px]">
              <li className="font-bold">Quick Links</li>
              <li className="hover:underline">
                <a href="">Contact</a>
              </li>
              <li className="hover:underline">
                <a href="">School Affiliation</a>
              </li>
              <li className="hover:underline">
                <a href="">Privacy Policy</a>
              </li>
              <li className="hover:underline">
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
          <aside className="flex flex-1 w-full h-full justify-end items-end">
            <div className="flex w-full justify-end items-end text-background">
              <p>© 2026 PIK-R SAGA. Empowering Youth Excellence.</p>
            </div>
          </aside>
        </div>
      </footer>
    );
}