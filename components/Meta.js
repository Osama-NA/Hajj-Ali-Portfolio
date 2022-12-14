import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />

            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'MOHAMMAD HAJ-ALI',
    keywords: 'Photography, Portfolio, Photography portfolio, Mohamad Haj-Ali portfolio',
    description: 'Mohammad Haj-Ali\'s Portfolio',
}

export default Meta