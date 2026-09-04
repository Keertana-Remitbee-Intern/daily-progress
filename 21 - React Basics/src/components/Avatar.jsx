function Avatar({ name }) {
    return (
        <div className="avatar">
            {name.charAt(0)}
        </div>
    );
}
export default Avatar;