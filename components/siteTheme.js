export default function siteTheme() {
    return {
        colors: {
            primaryBlue: '#12157b',
            altBlue: '#9ad4e6',
            isPink: '#f0b1f5',
            isWhite: '#ffffff',
            mobileTransparentblue: 'rgba(18, 21, 123,.85)',
        },
        widths: {
            xlargeMaxWidth: '1100px',
            largeMaxWidth: '800px',
            mediumMaxWidth: '600px',
            contentList: '800px',
            mobileMenu: '576px',
            readingWidth: '80ch'
        },
        padding: {
            sectionPadding: '4rem 0',
            readingSectionPadding: '0 2rem'
        },
        breakPoints: {
            small: '480px',
            medium: '768px',
            large: '992px',
            xLarge: '1200px'
        }
    }
}