export default function Footer() {
    return (
        <div className="bg-slate-800">
            <div className="container mx-auto">
                <footer className="footer py-10 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <footer className="footer pb-10 text-base-content border-base-300">
                    <div className="items-center grid-flow-col">
                        <img
                            className="block h-8 w-auto"
                            src="/Logo.svg"
                            alt="Your Company"
                        />
                        <p className="pl-5 text-sm">
                            Copyright © 2022 - All right reserved by Cinemateca
                            Ltd
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
