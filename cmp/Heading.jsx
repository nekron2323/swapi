const Heading = ({ tag, text, onClick, style }) => {
    const Tag = tag || 'h1';
    return <Tag onClick={onClick} style={style}>{text}</Tag>
}

export default Heading