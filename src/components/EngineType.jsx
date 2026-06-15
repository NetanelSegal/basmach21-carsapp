
export default function EngineType(props) {
    return (
        <span className="text-sm sm:text-base">{props.is_electric ? '⚡ Electric' : '⛽ Gas'}</span>
    );
}
