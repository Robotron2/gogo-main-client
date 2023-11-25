import { useState } from "react"
import DatePicker from "react-date-picker"

const DateComponent = () => {
	const [startDate, setStartDate] = useState(new Date())

	return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
}

export default DateComponent
