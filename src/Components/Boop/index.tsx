import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

interface BoopTypes {
	x: number
	y: number
	rotation: number
	scale: number
	timing: number
	children: React.FC
}

const Boop = ({
	x = 0,
	y = 0,
	rotation = 0,
	scale = 1,
	timing = 150,
	children,
}: BoopTypes) => {
	const [isBooped, setIsBooped] = useState(false)

	const style = useSpring({
		display: 'inline-block',
		transform: isBooped
			? `translate(${x}px, ${y}px)
                rotate(${rotation}deg)
                scale(${scale})`
			: `translate(0px, 0px)
                rotate(0deg)
                scale(1)`,
		config: {
			tension: 300,
			friction: 10,
		},
	})
	useEffect(() => {
		if (!isBooped) {
			return
		}

		const timeoutId = window.setTimeout(() => {
			setIsBooped(false)
		}, timing)

		return () => {
			window.clearTimeout(timeoutId)
		}
	}, [isBooped, timing])

	const trigger = () => {
		setIsBooped(true)
	}

	return (
		<animated.div onMouseEnter={trigger} style={style}>
			{children}
		</animated.div>
	)
}

export default Boop
