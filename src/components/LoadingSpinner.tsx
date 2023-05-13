import { VscRefresh } from "react-icons/vsc"

type LoadingSpinnerProps = {
    big?: boolean
}

export function LoadingSpinner ({ big = false}: LoadingSpinnerProps) {
    const sizeClasses = big ? 'w-16 h-16' : 'w-10 h-10'

    return <div className="flex justify-center">
        <VscRefresh className={`animate-spin ${sizeClasses}`} />
    </div>
}