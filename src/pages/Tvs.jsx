import React from "react";
import { tvdummy } from "../tvDummy";
import Tv from "../components/Tv";

export default function Tvs() {
    return (
        <div>
            <div className="movies-container">
                {tvdummy.results.map((item) => {
                    return (
                        <Tv
                            title={item.name}
                            poster_path = {item.poster_path}
                            vote_average = {item.vote_average}
                        />
                    );
                })}
            </div>
        </div>
    );
}