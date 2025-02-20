import { useState } from "react";
import Button from "./Button";
const TinhToan = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState("");
    const [pheptinh, setPheptinh] = useState("");

    const handleAChange = (e) => {
        setA(e.target.value);
    };

    const handleBChange = (e) => {
        setB(e.target.value);
    };

    const handlePheptinhChange = (e) => {
        setPheptinh(e.target.value);
        console.log(e.target.value);
    };

    const handleTinhToan = () => {
        if (pheptinh === "+") {
            setResult(parseFloat(a) + parseFloat(b));
        } else if (pheptinh === "-") {
            setResult(parseFloat(a) - parseFloat(b));
        } else if (pheptinh === "*") {
            setResult(parseFloat(a) * parseFloat(b));
        } else if (pheptinh === "/") {
            setResult(parseFloat(a) / parseFloat(b));
        }
    };

    return (
        <div className="container mx-auto pt-10 ">
            <div className="flex justify-center">
                <input
                    type="input"
                    className="border p-2 rounded mr-2"
                    value={a}
                    onChange={handleAChange}
                    placeholder="Nhập số a"
                />
                <input
                    type="input"
                    className="border p-2 rounded"
                    value={b}
                    onChange={handleBChange}
                    placeholder="Nhập số b"
                />
            </div>
            <div className="flex justify-center m-3">
                <input
                    type="radio"
                    className=" p-4 m-2 "
                    name="group"
                    onChange={handlePheptinhChange}
                    value={"+"}
                />
                +
                <input
                    type="radio"
                    className=" p-4 m-2 "
                    name="group"
                    onChange={handlePheptinhChange}
                    value={"-"}
                />
                -
                <input
                    type="radio"
                    className=" p-4 m-2 "
                    name="group"
                    onChange={handlePheptinhChange}
                    value={"*"}
                />
                *
                <input
                    type="radio"
                    className=" p-4 m-2 "
                    name="group"
                    onChange={handlePheptinhChange}
                    value={"/"}
                />
                /
            </div>
            <div className="flex justify-center">
                <div className="flex cursor-pointer justify-center w-[120px] m-2 border p-2 rounded bg-sky-500 text-white hover:bg-sky-600">
                    <Button onClick={handleTinhToan} />
                </div>
            </div>
            <p className="flex justify-center">Kết quả: {result}</p>
        </div>
    );
};

export default TinhToan;
