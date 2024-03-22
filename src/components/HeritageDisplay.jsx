import React from "react";
import Carosel from "./Carosel";

function HeritageDisplay() {
  return (

      <div className="bg-yellow-50 p-10 mx-4 shadow-xl " >
        {/* heritage name and author */}
        <h1 className="text-4xl font-bold text-center mb-8" style={{color: "brown"}}>
          Heritage Name -<i>author</i>
        </h1>
        <hr style={{borderColor:'#ad1c23'}}/>
        <br/>

        <Carosel />

        <hr style={{borderColor:'#ad1c23'}}/>
        <br/>

        <div className=" flex flex-col sm:flex-row sm:justify-center mb-8 ">
          <div className="sm:w-1/3 text-center sm:mr-8">
            <span className="text-xl font-bold mb-2" style={{color: "brown"}}>
              Built by:
            </span>
            <span className="text-gray-700 mx-2">xxxxxx</span>
          </div>
          <div className="sm:w-1/3 text-center sm:mr-8">
            <span className="text-xl font-bold mb-2" style={{color: "brown"}}>
              Built in:
            </span>
            <span className="text-gray-700 mx-2">xx-xx-xxxx</span>
          </div>
          <div className="sm:w-1/3 text-center sm:mr-8">
            <span className="text-xl font-bold mb-2" style={{color: "brown"}}>
              Location:
            </span>
            <span className="text-gray-700 mx-2">landmark, state</span>
          </div>
        </div>
        <hr style={{borderColor:'#ad1c23'}}/>
        <br/>
        <div className="text-justify">
          <h2 className="text-xl font-bold mb-2 text-center" style={{color: "brown"}}>Details...</h2>
          <p className="text-gray-700">
            But I must explain to you how all this mistaken idea of denouncing
            of a pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself, because it is pain, but occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure? On the
            other hand, we denounce with righteous indignation and dislike men
            who are so beguiled and demoralized by the charms of pleasure of the
            moment, so blinded by desire, that they cannot foresee the pain and
            trouble that are bound to ensue; and equal blame belongs to those
            who fail in their duty through weakness of will, which is the same
            as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish. In a free hour, when our
            power of choice is untrammeled and when nothing prevents our being
            able to do what we like best, every pleasure is to be welcomed and
            every pain avoided. But in certain circumstances and owing to the
            claims of duty or the obligations of business it will frequently
            occur that pleasures have to be repudiated and annoyances accepted.
            The wise man therefore always holds in these matters to this
            principle of selection: he rejects pleasures to secure other greater
            pleasures, or else he endures pains to avoid worse pains
          </p>
        </div>
      </div>
    
  );
}

export default HeritageDisplay;
