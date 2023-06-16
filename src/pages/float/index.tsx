import imgSrc from "../../assets/speakless.jpg";

export default function Float() {
  return (
    <div>
      <div className="bg-purple-300 w-128">
        <img className="w-40 m-2 float-left" src={imgSrc} alt="cat"></img>
        <img className="w-40 m-16 float-right" src={imgSrc} alt="cat"></img>

        <p className="bg-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
          aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
          pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet
          nunc, at ultricies tellus laoreet sit amet.
        </p>
        <p className="">
          Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit
          amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
          neque, ac ornare ex malesuada et.
        </p>
        <p>
          Invitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
          imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue.
          Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
          varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
          Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
          malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
          facilisis sed est.
        </p>

        <p>
          Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
          tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
          lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
          quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
      </div>
      <div className="bg-red-300">Hey</div>
    </div>
  );
}
