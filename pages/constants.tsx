import React from 'react';

// Contact Information
export const CONTACT_INFO = {
    name: "Malith Lakshan",
    email: "malith@solotechsolution.com",
    phone: "+94 76 123 4567",
    location: "Negombo, Western Province, Sri Lanka",
    whatsappLink: "https://wa.me/94761234567"
};

// Service Icons
export const LaptopIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const CCTVIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const NetworkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

export const DataRecoveryIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

export const SoftwareIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

export const ConsultingIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

// Why Choose Us Icons
export const CertifiedIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

export const FastTurnaroundIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const QualityIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

// Process Icons
export const ConsultationIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

export const DiagnosisIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

export const RepairIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const QuoteIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.521.144-.829.271-.31.127-.632.295-.97.478-.337.184-.656.397-.978.626-.318.23-.639.467-.931.727-.298.258-.594.532-.863.826-.268.296-.498.615-.714.941-.434.647-.747 1.353-1.008 2.1-.26.757-.448 1.554-.542 2.375-.094.825-.115 1.673-.031 2.518.08.852.27 1.696.658 2.463.195.373.42.732.673 1.067.248.34.53.651.838.936.31.282.64.535.981.762.344.228.702.424 1.069.586.185.082.38.15.576.221l.595.177.591.135c.197.037.395.08.592.106.398.052.8.07 1.206.07.399 0 .801-.025 1.191-.082.391-.058.781-.137 1.165-.235.383-.103.752-.231 1.117-.366.368-.14.724-.294 1.065-.465.344-.17.675-.349.991-.536.319-.187.619-.391.909-.598.286-.213.56-.436.821-.667.263-.238.508-.486.74-.747.465-.527.868-1.094 1.202-1.698.17-.3.323-.604.464-.91.14-.306.271-.611.382-.92.112-.313.207-.629.29-.948.089-.314.158-.636.214-.962.051-.325.082-.654.1-.982.014-.334.01-.67-.013-1.005-.023-.332-.061-.668-.121-.997-.112-.657-.291-1.306-.525-1.938-.242-.625-.539-1.229-.886-1.792-.344-.569-.728-1.091-1.146-1.57-.415-.482-.863-.918-1.334-1.315-.469-.398-.959-.764-1.464-1.08-.508-.324-1.029-.606-1.558-.85-.525-.252-1.054-.461-1.591-.636-.531-.178-1.066-.321-1.603-.439-.538-.115-1.078-.211-1.618-.283-.542-.067-1.086-.119-1.627-.13-.541-.012-1.083.03-1.612.085l-.529.063-.529.08c-.352.058-.706.092-1.051.174-.334.09-.67.16-1.001.262-.325.11-.645.23-.959.37-.312.14-.619.297-.92.466.303-.156.615-.295.934-.421.159-.063.32-.128.482-.187.081-.031.164-.055.246-.083l.25-.071.502-.128.507-.093c.337-.059.673-.118 1.013-.148.169-.016.338-.032.508-.041l.51-.015c.341-.008.683-.02 1.025-.008.339.015.68.019 1.019.05.337.037.676.061 1.012.117.168.025.338.044.505.075l.501.09c.333.062.666.133.996.218.656.171 1.299.401 1.917.683.617.283 1.209.623 1.763 1.012.277.194.548.397.806.614.131.108.26.22.387.334l.377.352c.246.246.493.491.722.75.464.51.888 1.058 1.26 1.642.185.293.356.594.513.904.155.312.299.629.425.954.244.652.439 1.33.586 2.024.147.695.241 1.408.28 2.129.015.361.024.723.012 1.085-.006.363-.032.725-.068 1.088-.07.722-.182 1.443-.343 2.157-.159.715-.363 1.422-.605 2.113-.238.695-.52 1.371-.84 2.029-.158.33-.325.654-.503.973-.177.32-.368.632-.568.938-.399.611-.833 1.19-1.302 1.729-.236.269-.478.529-.731.779-.253.248-.516.488-.785.716-.271.226-.55.441-.835.644-.285.203-.579.395-.876.576-.298.185-.602.354-.912.516-.309.165-.625.314-.944.452-.638.273-1.299.501-1.978.672-.34.086-.684.16-1.032.218-.174.027-.349.053-.524.073l-.527.04c-.351.025-.703.04-1.057.044-.354-.003-.709-.012-1.064-.039-.356-.024-.712-.065-1.065-.113-.354-.052-.709-.11-1.059-.183-.35-.077-.699-.163-1.044-.263-.344-.103-.686-.218-1.022-.347-.169-.064-.335-.135-.502-.203l-.496-.219c-.328-.148-.648-.313-.965-.482-.629-.344-1.23-.73-1.794-1.169-.28-.222-.552-.452-.813-.695-.259-.246-.51-.499-.75-.764-.479-.528-.918-1.097-1.304-1.702-.192-.303-.37-.614-.534-.932-.16-.321-.312-.647-.447-.98-.268-.668-.476-1.362-.626-2.075-.148-.715-.232-1.448-.254-2.19-.019-.74.024-1.486.134-2.225.11-.737.276-1.468.497-2.18.446-1.428 1.081-2.765 1.856-4.017.39-.624.818-1.214 1.276-1.77.228-.279.466-.548.712-.807.123-.13.248-.258.378-.382l.388-.368c.259-.245.521-.486.792-.716.543-.46 1.11-.882 1.695-1.266.145-.096.293-.187.441-.278l.449-.265.898-.524.917-.473c.153-.078.308-.153.464-.227l.472-.212.944-.415c.159-.066.319-.13.48-.193l.487-.179.975-.347.989-.308c.33-.1.663-.194.998-.281.167-.044.336-.085.505-.124l.51-.11 1.021-.201.515-.09.517-.062.259-.03.26-.02c.347-.033.695-.056 1.043-.072.695-.024 1.392-.01 2.086.066.693.074 1.382.196 2.061.365.679.17 1.347.385 1.997.649.163.066.324.135.485.205l.481.219c.32.146.636.302.946.47.619.337 1.214.72 1.783 1.143.283.212.558.434.824.668.132.117.263.236.391.358l.382.371c.251.251.497.508.734.774.473.529.913 1.092 1.311 1.688.199.298.384.605.558.918.172.315.334.636.485.963.147.329.285.663.412 1.003.254.68.462 1.379.629 2.09.083.357.154.716.212 1.078.059.362.108.726.142 1.092.067.732.093 1.469.071 2.204-.022.739-.09 1.475-.205 2.206-.115.731-.271 1.455-.465 2.166-.096.356-.202.71-.318 1.06-.115.351-.243.699-.378 1.043-.27.688-.579 1.36-.921 2.012-.344.652-.719 1.28-1.124 1.882-.201.302-.412.597-.631.887-.218.291-.444.575-.678.852-.468.555-.967 1.075-1.494 1.56-.264.241-.535.475-.813.699-.279.223-.565.437-.857.641-.584.408-1.191.781-1.816 1.114-.311.168-.628.325-.949.471-.321.146-.647.281-.976.407-.658.25-1.329.461-2.01.627-.34.084-.684.156-1.03.215-.346.059-.694.107-1.044.141-.699.068-1.404.09-2.108.067-.176-.006-.353-.014-.529-.025l-.527-.044c-.351-.034-.702-.074-1.051-.126-.698-.106-1.388-.26-2.063-.461-.338-.101-.672-.211-1.002-.331-.33-.121-.656-.252-.977-.393-.642-.282-1.264-.608-1.856-.978-.296-.186-.584-.383-.865-.589-.279-.208-.552-.425-.815-.653-.526-.456-1.017-.954-1.468-1.487-.225-.267-.439-.543-.643-.827-.202-.286-.395-.58-.577-.881-.363-.603-.685-1.234-.96-1.888-.137-.327-.263-.66-.377-.997-.113-.338-.215-.68-.306-1.026-.182-.693-.322-1.401-.415-2.118-.046-.359-.082-.719-.105-1.081-.023-.362-.034-.725-.031-1.088.006-.726.053-1.452.144-2.173.09-.722.222-1.438.392-2.145.169-.707.373-1.403.616-2.082.241-.681.52-1.344.836-1.988.157-.322.323-.639.497-.949.175-.31.36-.613.554-.909.194-.296.397-.586.608-.868.423-.564.883-1.096 1.374-1.595.246-.249.501-.488.764-.717.263-.229.534-.448.813-.656.558-.415 1.143-.79 1.751-1.119.304-.165.616-.318.933-.461.158-.071.318-.14.479-.207l.484-.195.968-.375.485-.182c.162-.06.326-.116.49-.171l.493-.156c.329-.103.661-.198.995-.286.668-.175 1.346-.315 2.031-.416.342-.051.686-.094 1.031-.127.345-.033.691-.058 1.038-.072.693-.027 1.389-.023 2.083.017.173.01.347.022.52.036l.519.053 1.037.118.519.068c.173.025.345.052.517.082.687.118 1.368.273 2.039.464.671.192 1.331.421 1.975.688.322.133.639.276.952.427.312.152.619.313.921.482.604.338 1.186.713 1.744 1.126.279.206.55.422.814.647.131.112.261.226.389.342l.381.356c.251.24.495.488.732.745.472.515.916 1.06 1.323 1.635.203.288.394.583.576.885.181.303.352.612.514.926.319.631.603 1.283.849 1.951.12.335.232.674.334 1.017.1.344.192.691.273 1.041.161.701.283 1.412.366 2.129.081.718.124 1.442.128 2.167.001.363-.01.726-.032 1.089-.022.363-.054.725-.098 1.087-.086.724-.211 1.443-.372 2.154-.159.712-.354 1.414-.586 2.101-.114.344-.24.683-.375 1.019-.135.336-.28.668-.434.995-.308.654-.649 1.289-1.025 1.903-.187.308-.383.609-.588.904-.204.296-.417.584-.638.865-.442.563-.916 1.096-1.421 1.598-.252.251-.513.492-.781.724-.268.231-.544.452-.828.662-.568.421-1.161.804-1.776 1.146-.307.172-.621.333-.939.484-.159.075-.319.149-.48.22l-.486.208-.971.406-.486.195c-.163.064-.327.126-.491.186l-.495.177c-.33.116-.663.223-.999.321-.672.196-1.353.359-2.041.484-.344.063-.69.119-1.037.166-.347.047-.695.085-1.044.113-.698.055-1.4.082-2.102.082z" />
    </svg>
);

// Services Data with working Unsplash images
export const SERVICES_DATA = [
    {
        id: 'pc-laptop-repair',
        title: 'PC & Laptop Repair',
        shortDescription: 'Expert diagnosis and repair for all makes and models of desktops and laptops.',
        imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
        bannerUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1920&q=80',
        icon: <LaptopIcon className="w-8 h-8 text-cyan-500" />,
        details: {
            description: 'Professional repair services for all computer hardware issues.',
            longDescription: 'From slow performance to hardware failures, we diagnose and fix all types of PC and laptop issues. Our certified technician has extensive experience with all major brands including Dell, HP, Lenovo, ASUS, Acer, and custom-built systems. We use genuine parts and provide warranty on all repairs.',
            serviceLevels: [
                {
                    title: 'Hardware Repairs',
                    points: [
                        'Screen replacement and repair',
                        'Keyboard and touchpad replacement',
                        'Battery replacement and charging issues',
                        'Motherboard diagnostics and repair',
                        'RAM and storage upgrades',
                        'Cooling system cleaning and fan replacement'
                    ]
                },
                {
                    title: 'Performance Optimization',
                    points: [
                        'Operating system reinstallation and updates',
                        'Malware and virus removal',
                        'System cleanup and optimization',
                        'Software installation and configuration',
                        'Data backup and transfer'
                    ]
                }
            ],
            faqs: [
                {
                    q: 'How long does a typical repair take?',
                    a: 'Most repairs are completed within 1-3 business days, depending on parts availability and complexity.'
                },
                {
                    q: 'Do you provide warranty on repairs?',
                    a: 'Yes, we provide a 30-day warranty on all hardware repairs and labor.'
                },
                {
                    q: 'Can you repair water-damaged laptops?',
                    a: 'Yes, we offer liquid damage assessment and repair services. Success depends on the extent of damage.'
                }
            ]
        }
    },
    {
        id: 'cctv-installation',
        title: 'CCTV Installation & Maintenance',
        shortDescription: 'Professional security camera installation and ongoing maintenance services.',
        imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
        bannerUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80',
        icon: <CCTVIcon className="w-8 h-8 text-cyan-500" />,
        details: {
            description: 'Comprehensive CCTV solutions for homes and businesses.',
            longDescription: 'Protect your property with state-of-the-art CCTV systems. We offer consultation, installation, configuration, and ongoing maintenance. Our solutions include IP cameras, NVR/DVR systems, remote viewing capabilities, and integration with existing security infrastructure.',
            serviceLevels: [
                {
                    title: 'Installation Services',
                    points: [
                        'Site survey and security assessment',
                        'Camera placement planning',
                        'Professional installation and mounting',
                        'Network configuration and setup',
                        'Remote viewing setup for mobile and desktop',
                        'Integration with existing systems'
                    ]
                },
                {
                    title: 'Maintenance & Support',
                    points: [
                        'Regular system health checks',
                        'Firmware updates and patches',
                        'Camera cleaning and adjustment',
                        'Storage management and backup',
                        'Troubleshooting and repairs',
                        '24/7 technical support'
                    ]
                }
            ],
            faqs: [
                {
                    q: 'What types of cameras do you install?',
                    a: 'We work with all major brands including Hikvision, Dahua, Axis, and others. We recommend systems based on your specific needs and budget.'
                },
                {
                    q: 'Can I view my cameras remotely?',
                    a: 'Yes, all our installations include remote viewing capabilities via smartphone, tablet, or computer.'
                },
                {
                    q: 'How long is video footage stored?',
                    a: 'Storage duration depends on your system configuration. We can design systems for 7 days to 90+ days of storage.'
                }
            ]
        }
    },
    {
        id: 'network-infrastructure',
        title: 'Network Infrastructure',
        shortDescription: 'Design, setup, and maintenance of robust network infrastructures for businesses.',
        imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
        bannerUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80',
        icon: <NetworkIcon className="w-8 h-8 text-cyan-500" />,
        details: {
            description: 'Enterprise-grade networking solutions tailored to your needs.',
            longDescription: 'Build a reliable and secure network infrastructure that grows with your business. From small office setups to complex multi-site deployments, we provide end-to-end networking solutions including routers, switches, wireless access points, and network security.',
            serviceLevels: [
                {
                    title: 'Network Design & Implementation',
                    points: [
                        'Network architecture planning',
                        'Router and switch configuration',
                        'Wireless network setup',
                        'VPN and remote access solutions',
                        'Network security implementation',
                        'VLAN configuration and management'
                    ]
                },
                {
                    title: 'Ongoing Management',
                    points: [
                        'Network monitoring and performance optimization',
                        'Firmware updates and security patches',
                        'Bandwidth management',
                        'Troubleshooting and issue resolution',
                        'Network documentation',
                        'Disaster recovery planning'
                    ]
                }
            ],
            faqs: [
                {
                    q: 'Do you support both wired and wireless networks?',
                    a: 'Yes, we design and implement both wired (Ethernet) and wireless (WiFi) networks, as well as hybrid solutions.'
                },
                {
                    q: 'Can you help with network security?',
                    a: 'Absolutely. We implement firewalls, VPNs, access controls, and other security measures to protect your network.'
                },
                {
                    q: 'What brands do you work with?',
                    a: 'We work with industry-leading brands including Cisco, Ubiquiti, TP-Link, Mikrotik, and others.'
                }
            ]
        }
    },
    {
        id: 'data-recovery',
        title: 'Data Recovery Services',
        shortDescription: 'Professional data recovery from failed hard drives, SSDs, and storage devices.',
        imageUrl: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
        bannerUrl: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1920&q=80',
        icon: <DataRecoveryIcon className="w-8 h-8 text-cyan-500" />,
        details: {
            description: 'Recover your valuable data from damaged or failed storage devices.',
            longDescription: 'Data loss can be devastating. Our data recovery specialists use advanced tools and techniques to recover data from hard drives, SSDs, USB drives, memory cards, and RAID arrays. We handle logical failures, physical damage, and accidental deletions with a high success rate.',
            serviceLevels: [
                {
                    title: 'Recovery Services',
                    points: [
                        'Hard drive and SSD recovery',
                        'USB flash drive recovery',
                        'Memory card recovery',
                        'RAID array reconstruction',
                        'Deleted file recovery',
                        'Formatted drive recovery'
                    ]
                },
                {
                    title: 'Our Process',
                    points: [
                        'Free initial assessment',
                        'Diagnostic report with cost estimate',
                        'Clean room recovery for physical damage',
                        'Secure data extraction',
                        'Quality verification',
                        'Confidential handling of all data'
                    ]
                }
            ],
            faqs: [
                {
                    q: 'What is your success rate for data recovery?',
                    a: 'Our success rate is over 85% for most common failure scenarios. Success depends on the type and extent of damage.'
                },
                {
                    q: 'Is my data kept confidential?',
                    a: 'Absolutely. We follow strict confidentiality protocols and sign NDAs when required.'
                },
                {
                    q: 'How long does data recovery take?',
                    a: 'Most recoveries are completed within 2-5 business days. Complex cases may take longer.'
                }
            ]
        }
    },
    {
        id: 'software-solutions',
        title: 'Software Solutions',
        shortDescription: 'Operating system installation, software setup, and troubleshooting services.',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
        bannerUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80',
        icon: <SoftwareIcon className="w-8 h-8 text-cyan-500" />,
        details: {
            description: 'Complete software installation and configuration services.',
            longDescription: 'Get your systems running smoothly with our software services. We handle everything from operating system installation and updates to application setup and configuration. Our services ensure your software is properly licensed, optimized, and secure.',
            serviceLevels: [
                {
                    title: 'Installation & Setup',
                    points: [
                        'Windows, macOS, and Linux installation',
                        'Driver installation and updates',
                        'Office suite and productivity software',
                        'Antivirus and security software',
                        'Backup solutions setup',
                        'Cloud service integration'
                    ]
                },
                {
                    title: 'Troubleshooting & Optimization',
                    points: [
                        'Software conflict resolution',
                        'Performance optimization',
                        'Update management',
                        'License management',
                        'Malware removal',
                        'System restore and recovery'
                    ]
                }
            ],
            faqs: [
                {
                    q: 'Do you provide software licenses?',
                    a: 'We can help you obtain genuine licenses through official channels. We never use pirated software.'
                },
                {
                    q: 'Can you help with custom software installation?',
                    a: 'Yes, we can install and configure most business and professional software applications.'
                },
                {
                    q: 'Do you offer remote software support?',
                    a: 'Yes, many software issues can be resolved remotely with your permission.'
                }
            ]
        }
    },
    {
        id: 'it-consulting',
        title: 'IT Consulting',
        shortDescription: 'Strategic IT planning and consulting services for businesses of all sizes.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        bannerUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
        icon: <ConsultingIcon className="w-8 h-8 text-cyan-500" />,
        details: {
            description: 'Expert guidance for your IT infrastructure and technology decisions.',
            longDescription: 'Make informed technology decisions with expert consulting. We help businesses plan, implement, and manage their IT infrastructure. From technology audits to strategic planning, we provide insights that align technology with your business goals.',
            serviceLevels: [
                {
                    title: 'Consulting Services',
                    points: [
                        'IT infrastructure assessment',
                        'Technology roadmap planning',
                        'Budget planning and cost optimization',
                        'Vendor evaluation and selection',
                        'Security audit and recommendations',
                        'Disaster recovery planning'
                    ]
                },
                {
                    title: 'Business Solutions',
                    points: [
                        'Digital transformation guidance',
                        'Cloud migration planning',
                        'Hardware lifecycle management',
                        'Compliance and best practices',
                        'Training and knowledge transfer',
                        'Ongoing strategic support'
                    ]
                }
            ],
            faqs: [
                {
                    q: 'Who benefits from IT consulting?',
                    a: 'Any business looking to optimize their IT infrastructure, plan upgrades, or make strategic technology decisions.'
                },
                {
                    q: 'What does an IT assessment include?',
                    a: 'We evaluate your current infrastructure, identify vulnerabilities, recommend improvements, and provide a detailed report.'
                },
                {
                    q: 'Do you offer ongoing consulting?',
                    a: 'Yes, we offer both one-time consultations and ongoing advisory services based on your needs.'
                }
            ]
        }
    }
];

// Testimonials Data
export const TESTIMONIALS_DATA = [
    {
        name: "Samantha Perera",
        company: "Ocean View Resort",
        quote: "Malith installed our entire CCTV system and it works flawlessly. His professionalism and attention to detail are outstanding. Highly recommended!"
    },
    {
        name: "Rajesh Kumar",
        company: "Kumar Electronics",
        quote: "We've been using SoloTech for all our computer repairs. Fast, reliable, and affordable. Malith really knows his stuff!"
    },
    {
        name: "Nadeeka Silva",
        company: "Silva Trading Co.",
        quote: "Our network was a mess until Malith redesigned it. Now everything runs smoothly and we haven't had downtime since. Excellent service!"
    }
];
