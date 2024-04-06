import Image from 'next/image';
import React from 'react';

const Footer = ({ data }) => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
            <aside>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <Image src={data.user.about.avatar.url} alt={data.user.about.title} width={100} height={100} />
                    </div>
                </div>
                <p className="font-bold">
                    {data.user.about.quote}
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {data.user.social_handles.map((footer, index) => (
                        <a key={index} href={footer.url}
                            className="hover:scale-110 transition duration-300">
                            <Image src={footer.image.url} alt={footer.platform} width={30} height={30} />
                        </a>
                    ))}
                </div>
            </nav>
        </footer>
    );
};

export default Footer;