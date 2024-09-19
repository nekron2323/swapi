const Heading = ({ tag, text, onClick }) => {
    const Tag = tag || 'h1';
    return <Tag onClick={onClick}>{text}</Tag>
}

export default Heading