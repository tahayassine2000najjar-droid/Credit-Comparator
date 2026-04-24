import React, { useState } from "react";
import { calculateYearlyEvolution } from "../utils/calculations";

const CompoundInterestCalculator = () => {
    const [principal, setPrincipal] = useState(1000);
    const [rate, setRate] = useState(5);
    const [years, setYears] = useState(10);

    const evolution = calculateYearlyEvolution(principal, rate, years);

    return (
        <div className="compound-section">
            <h2>Compound Interest Visualizer</h2>
            <div>
                <label>Initial Capital (dhs): </label>
                <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                />
                <label>Rate (%): </label>
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                />
                <label>Duration (years): </label>
                <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                />
            </div>

            <div
                style={{
                    marginTop: "20px",
                    maxHeight: "300px",
                    overflowY: "auto",
                }}
            >
                <table style={{ margin: "0 auto", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Capital (dhs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {evolution.map((point) => (
                            <tr key={point.year}>
                                <td>{point.year}</td>
                                <td>{point.balance.toFixed(2)} dhs</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompoundInterestCalculator;
