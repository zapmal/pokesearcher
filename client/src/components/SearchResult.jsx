import React from 'react';

const SearchResult = ({ result }) => {
  
  return result 
    ? (
      <div className='poke-result mt-3'>
        <p className='text-muted text-center mt-3 mb-0'>
          We found it!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum quisquam inventore provident consequatur architecto saepe dolorem amet modi quidem autem quod in, odit doloribus. Labore excepturi enim placeat minima beatae magnam esse! Explicabo voluptatibus dolorem atque dolor repellat, natus et mollitia hic temporibus tempore facilis unde, obcaecati ullam ea, sunt recusandae quod id illum delectus repellendus culpa consequatur necessitatibus. Dolores molestiae numquam tenetur libero non blanditiis, alias odit reprehenderit neque, eveniet itaque nobis at iusto temporibus nihil impedit odio dolore, corporis laboriosam nam. Perspiciatis earum quos magnam dicta quas dolor, blanditiis, voluptate animi vero quo ut voluptatibus tempore quia eveniet provident quis error quidem et sint incidunt sed nesciunt ratione, soluta consectetur. Officiis reprehenderit eius eum. Sed, nemo! Quia inventore quasi neque laudantium reiciendis provident nemo asperiores praesentium possimus cum repellat, recusandae nobis sunt harum labore saepe corrupti nostrum facilis dicta ab eligendi voluptatibus sit nisi. Dicta impedit sapiente, sed debitis a enim nostrum laborum natus illum repellat unde. Rerum cum tempora maxime sequi temporibus, blanditiis libero recusandae sunt praesentium itaque hic eveniet nihil incidunt optio expedita quis possimus laborum, atque tenetur! Voluptatibus quaerat quo nobis, voluptas ab exercitationem porro? Nemo eos eaque magni, corrupti culpa cupiditate? Praesentium nesciunt molestias enim illum. Accusamus debitis quasi porro esse quis voluptate, impedit cupiditate laborum nobis asperiores adipisci nemo dolorem! Numquam rerum voluptatum asperiores nobis placeat quam vitae molestias quod. Quod, sed nesciunt sint tempore quo soluta consequatur esse molestiae sunt dolor minima quaerat mollitia praesentium sit ea. Doloribus ipsum, odit eius veritatis eaque quod? Voluptatum fugiat fugit nostrum obcaecati ut quibusdam, cumque beatae iure, eius ducimus quidem consequatur nihil vero ad minus dicta, alias necessitatibus ea! Culpa, vero provident ex doloribus earum, delectus quis odio placeat quae accusamus dolorem excepturi ad nesciunt. Sunt autem at obcaecati rem. Deserunt porro sequi aliquid.
        </p>
      </div>
    ) 
    : (
      <p className='text-muted text-center mt-3 mb-0'>
        Start searching!
      </p>
    );
};

export default SearchResult;