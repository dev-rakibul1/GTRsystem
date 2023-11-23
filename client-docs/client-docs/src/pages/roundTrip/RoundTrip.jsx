import React from "react";

const RoundTrip = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col min-h-screen py-4">
      <div className="mb-7">
        <h1 className="text-xl font-bold">Round trip</h1>
        <p>Explore Inno Travel Tech: Visual Demo</p>
      </div>

      <iframe
        width="80%"
        height="450"
        src="https://www.youtube.com/embed/oRDRfikj2z8?si=K-u3UuRZv8bDFvwC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="py-7"
      ></iframe>

      <div className="text-justify">
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sit
          dicta voluptatum commodi repellendus quibusdam voluptas harum.
          Deleniti similique expedita saepe et reprehenderit cum, magni earum
          corporis, itaque eius unde eum ipsam cumque dolor doloremque. Modi
          voluptas ad nemo veniam sint itaque cupiditate nesciunt distinctio
          illum corrupti, soluta saepe obcaecati voluptate architecto! Iusto
          tempore distinctio et magni ea velit, praesentium vero. Distinctio
          corrupti tenetur animi vitae ratione. Velit expedita aperiam, quis ad
          eaque, voluptas consequatur assumenda numquam quisquam porro, pariatur
          eum? Itaque a molestiae laboriosam eveniet fuga aut dignissimos
          possimus, officia omnis labore perferendis, placeat culpa nisi atque
          dolor, commodi et vero mollitia animi assumenda voluptas veritatis
          tempora laborum aliquid. Debitis unde blanditiis optio iusto similique
          laudantium itaque quae natus, ab facilis temporibus! Consequatur vero
          doloribus labore quae provident natus facilis ad, distinctio fugiat
          esse debitis dolor dolore vel quo! Obcaecati perferendis temporibus
          voluptas maxime accusantium hic? Neque porro eaque, nihil excepturi
          molestiae ipsum, sed doloremque, culpa quia repellendus sapiente
          deleniti assumenda nostrum dolorem accusantium dolores. Laboriosam
          quos laudantium tenetur molestias adipisci veritatis cumque harum ab!
          Recusandae nihil nam iusto ut consectetur illum impedit inventore!
          Optio nemo impedit culpa, quaerat dolorem necessitatibus dicta sed
          illo qui cupiditate harum, nisi vitae!
        </p>

        {/* Feature block 01 */}
        <div className="bg-white p-4 flex items-center space-x-4 border-b border-spacing-3 border-gray-300">
          <div className="w-1/3">
            <iframe
              width="320"
              height="320"
              src="https://www.youtube.com/embed/u2KCgb6jwK0?si=WQm2Rg__XAsNcDKO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-2/3">
            <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
            <p className="text-gray-600">
              Vitae odit, suscipit exercitationem velit voluptatem maiores
              laudantium architecto error magni ipsa, laborum corporis nesciunt
              laboriosam soluta aut cupiditate inventore iure obcaecati optio
              consequatur. Impedit laudantium esse eos labore reprehenderit est
              maxime recusandae molestiae! Quisquam esse id dolorem dolorum
              impedit ad reiciendis quia animi alias numquam ullam eligendi
              praesentium, pariatur ea ipsam, repellat delectus consectetur
              aliquam iure sapiente? Voluptatibus similique, nesciunt laudantium
              veniam quia a ad eaque adipisci? Cumque, porro dolore culpa odit
              quod earum illo consequuntur. Ab minima illo consectetur
              voluptatem debitis aspernatur. Totam numquam atque vero non quidem
              cumque consequuntur.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </div>
        {/* Feature block 02 */}
        <div className="bg-white p-4 flex-row-reverse flex items-center space-x-4 border-b border-spacing-3 border-gray-300">
          <div className="w-1/3">
            <img
              src="https://via.placeholder.com/160"
              alt="Feature"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div className="w-2/3 px-4 text-justify">
            <h3 className="text-xl text-right font-semibold mb-2">
              Feature Title
            </h3>
            <p className="text-gray-600">
              Vitae odit, suscipit exercitationem velit voluptatem maiores
              laudantium architecto error magni ipsa, laborum corporis nesciunt
              laboriosam soluta aut cupiditate inventore iure obcaecati optio
              consequatur. Impedit laudantium esse eos labore reprehenderit est
              maxime recusandae molestiae! Quisquam esse id dolorem dolorum
              impedit ad reiciendis quia animi alias numquam ullam eligendi
              praesentium, pariatur ea ipsam, repellat delectus consectetur
              aliquam iure sapiente? Voluptatibus similique, nesciunt laudantium
              veniam quia a ad eaque adipisci? Cumque, porro dolore culpa odit
              quod earum illo consequuntur. Ab minima illo consectetur
              voluptatem debitis aspernatur. Totam numquam atque vero non quidem
              cumque consequuntur.
            </p>
            <ul className="list-disc list-inside mt-2 text-right">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </div>
        {/* Feature block 01 */}
        <div className="bg-white p-4 flex items-center space-x-4 border-b border-spacing-3 border-gray-300">
          <div className="w-1/3">
            <img
              src="https://via.placeholder.com/160"
              alt="Feature"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
            <p className="text-gray-600">
              Vitae odit, suscipit exercitationem velit voluptatem maiores
              laudantium architecto error magni ipsa, laborum corporis nesciunt
              laboriosam soluta aut cupiditate inventore iure obcaecati optio
              consequatur. Impedit laudantium esse eos labore reprehenderit est
              maxime recusandae molestiae! Quisquam esse id dolorem dolorum
              impedit ad reiciendis quia animi alias numquam ullam eligendi
              praesentium, pariatur ea ipsam, repellat delectus consectetur
              aliquam iure sapiente? Voluptatibus similique, nesciunt laudantium
              veniam quia a ad eaque adipisci? Cumque, porro dolore culpa odit
              quod earum illo consequuntur. Ab minima illo consectetur
              voluptatem debitis aspernatur. Totam numquam atque vero non quidem
              cumque consequuntur.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </div>

        {/* <!-- Start contribute area --> */}
        <section className="contribute-area section-gap">
          <div className="contribute-box">
            {/* <!-- single box --> */}
            <div className="contribute-single-box">
              <div className="contribute-aricle">
                <div className="px-3 max-w-full">
                  <h3>Their lives depend on your donation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, illo ipsum. Laboriosam, tenetur dignissimos
                    debitis ducimus aliquid consequuntur error inventore?
                  </p>
                  <a href="#" className="section-btn">
                    How to Contribute?
                  </a>
                </div>
              </div>
              <div className="contribute-images"></div>
            </div>

            {/* <!-- single box 2 --> */}
            <div className="contribute-single-box">
              <div className="contribute-imagesTwo"></div>
              <div className="contribute-aricle">
                <div className="px-3 max-w-full">
                  <h3>They need us to suvive</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, illo ipsum. Laboriosam, tenetur dignissimos
                    debitis ducimus aliquid consequuntur error inventore?
                  </p>
                  <a href="#" className="section-btn">
                    How to Contribute?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End of contribute area --> */}

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sit
          dicta voluptatum commodi repellendus quibusdam voluptas harum.
          Deleniti similique expedita saepe et reprehenderit cum, magni earum
          corporis, itaque eius unde eum ipsam cumque dolor doloremque. Modi
          voluptas ad nemo veniam sint itaque cupiditate nesciunt distinctio
          illum corrupti, soluta saepe obcaecati voluptate architecto! Iusto
          tempore distinctio et magni ea velit, praesentium vero. Distinctio
          corrupti tenetur animi vitae ratione. Velit expedita aperiam, quis ad
          eaque, voluptas consequatur assumenda numquam quisquam porro, pariatur
          eum? Itaque a molestiae laboriosam eveniet fuga aut dignissimos
          possimus, officia omnis labore perferendis, placeat culpa nisi atque
          dolor, commodi et vero mollitia animi assumenda voluptas veritatis
          tempora laborum aliquid. Debitis unde blanditiis optio iusto similique
          laudantium itaque quae natus, ab facilis temporibus! Consequatur vero
          doloribus labore quae provident natus facilis ad, distinctio fugiat
          esse debitis dolor dolore vel quo! Obcaecati perferendis temporibus
          voluptas maxime accusantium hic? Neque porro eaque, nihil excepturi
          molestiae ipsum, sed doloremque, culpa quia repellendus sapiente
          deleniti assumenda nostrum dolorem accusantium dolores. Laboriosam
          quos laudantium tenetur molestias adipisci veritatis cumque harum ab!
          Recusandae nihil nam iusto ut consectetur illum impedit inventore!
          Optio nemo impedit culpa, quaerat dolorem necessitatibus dicta sed
          illo qui cupiditate harum, nisi vitae!
        </p>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sit
          dicta voluptatum commodi repellendus quibusdam voluptas harum.
          Deleniti similique expedita saepe et reprehenderit cum, magni earum
          corporis, itaque eius unde eum ipsam cumque dolor doloremque. Modi
          voluptas ad nemo veniam sint itaque cupiditate nesciunt distinctio
          illum corrupti, soluta saepe obcaecati voluptate architecto! Iusto
          tempore distinctio et magni ea velit, praesentium vero. Distinctio
          corrupti tenetur animi vitae ratione. Velit expedita aperiam, quis ad
          eaque, voluptas consequatur assumenda numquam quisquam porro, pariatur
          eum? Itaque a molestiae laboriosam eveniet fuga aut dignissimos
          possimus, officia omnis labore perferendis, placeat culpa nisi atque
          dolor, commodi et vero mollitia animi assumenda voluptas veritatis
          tempora laborum aliquid. Debitis unde blanditiis optio iusto similique
          laudantium itaque quae natus, ab facilis temporibus! Consequatur vero
          doloribus labore quae provident natus facilis ad, distinctio fugiat
          esse debitis dolor dolore vel quo! Obcaecati perferendis temporibus
          voluptas maxime accusantium hic? Neque porro eaque, nihil excepturi
          molestiae ipsum, sed doloremque, culpa quia repellendus sapiente
          deleniti assumenda nostrum dolorem accusantium dolores. Laboriosam
          quos laudantium tenetur molestias adipisci veritatis cumque harum ab!
          Recusandae nihil nam iusto ut consectetur illum impedit inventore!
          Optio nemo impedit culpa, quaerat dolorem necessitatibus dicta sed
          illo qui cupiditate harum, nisi vitae!
        </p>
      </div>
    </div>
  );
};

export default RoundTrip;
