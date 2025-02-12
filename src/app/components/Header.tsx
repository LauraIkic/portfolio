'use client';

const Header = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth();  // getMonth() returns a zero-based index (0 for January, 1 for February, etc.)
    const dd = today.getDate();

    const weekdayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const weekdayName = weekdayNames[today.getDay()];

    const monthName = monthNames[mm];
    return (
        <div className="">
            <div className="flex justify-between md:font-bold p-4 border-b border-black">
                <p>{weekdayName}, {dd} . {monthName} {yyyy}</p>
                <p>Vienna, Austria</p>
            </div>
            <div className="flex justify-center md:pt-12 md:pb-8  text-bold md:text-4xl">
                Laura Ikic
            </div>
        </div>
    );
};

export default Header;
