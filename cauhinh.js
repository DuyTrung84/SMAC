tailwind.config = {
    theme: {
        extend: {
            colors: {
                'regal-gray': '#F2F2F2',
                'title': '#F63618',
                'FF5C01': '#FF5C01',
            },
            fontFamily: {
                'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'banner': "url('./img/Banner.svg')",
                'banner2': "url('./img/banner2.jpg')",
                'banner3': "url('./img/banner3.svg')",
            },
            dropShadow: {
                '3xl': [
                    ' 0px 0px 15px #f97316',
                ],
            },
            boxShadow: {
                '3xl': '0 0px 25px -15px rgba(0, 0, 0, 0.3)',
            },
            height: {
                '141': '141px',
                '500': '500px',
                '520': '520px',
            },
        },
        plugins: [
            require('flowbite/plugin'),
            require("tw-elements/dist/plugin.cjs")
        ]

    }
}