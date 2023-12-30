import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";
import styles from "../Home/Home.module.css";
const Home = () => {

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();


  const thaliItems = [
    {
      id: 1,
      item: "Chapati",
      description: "Whole wheat flatbread",
      price: 20,
      category: "Bread",
      image: "https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=0mGnvNM2lxl-dTTJlhAfVJE5WidxYmmvrvNs1NZUKvs=",
    },
    {
      id: 2,
      item: "Paneer Masala",
      description: "Cottage cheese curry",
      price: 100,
      category: "Main Course",
      image: "https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=SShuhVPIWBpUaJXqvdWqjPrh0AqsR6VR68GInZlyw6Y=",
    },
    {
      id: 3,
      item: "Curd",
      description: "Fresh yogurt",
      price: 30,
      category: "Side Dish",
      image: "https://media.istockphoto.com/id/1214850940/photo/yogurt-is-good-for-health-with-black-background.jpg?s=612x612&w=0&k=20&c=8GqPjqx9ykwamtCXQE_lOfsQRTQE89RxzBz2kcndXEg=",
    },
    {
      id: 4,
      item: "Pickle",
      description: "Assorted pickles",
      price: 20,
      category: "Side Dish",
      image: "https://images.unsplash.com/photo-1589135233689-d56032e9680a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlja2xlfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      item: "Sweet",
      description: "Dessert - Gulab Jamun",
      price: 50,
      category: "Dessert",
      image: "https://media.istockphoto.com/id/543560312/photo/gulab-jamun-or-gulaab-jamun-is-a-milk-solids-based-sweet-mithai.jpg?s=612x612&w=0&k=20&c=ilU3VFL9lGsbHFy7rSo_-m6uJEpP6jz1lkk9M3Xzybg=",
    },
    {
      id: 6,
      item: "Daal",
      description: "Lentil curry",
      price: 50,
      category: "Main Course",
      image: "https://t4.ftcdn.net/jpg/02/86/19/01/240_F_286190174_9PXr0tIQrQo3kcwvwVsmYnkxN9dCcAQc.jpg",
    },
  ]



  const Items = thaliItems.map((ele, index) => {
    const btnClickHandler = () => {
      dispatch(
        addItem({
          id: ele.id,
          image: ele.image,
          title: ele.item,
          price: ele.price,
        })
      );
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    };
    return (
      <div className={styles.div} key={index}>
        <div className="p-3">
          <img src={ele.image} alt="img" width="100%" height="157px"></img>
          <div className={styles.card}>
            <h4>{ele.item}</h4>
          </div>
          <div>
            <h5>{ele.description}</h5>
          </div>
          <div>
            <h5>Price :<span className="text-success"> $ {ele.price}</span></h5>
          </div>
        </div>
        <div>
          <button className={styles.button} onClick={btnClickHandler}>
            Add to Thali
          </button>
        </div>
      </div>
    )
  }
  )






  return (
    <>
      {showAlert && (
        <div
          className={`alert alert-success mt-3 ${styles.alert}`}
          role="alert"
        >
          Item added to Thali!
        </div>
      )}
      <div
        className="d-flex g-100 justify-content-around mt-5 mb-5"
        style={{ flexWrap: "wrap" }}
      >
        {Items}
      </div>
    </>
  )
}
export default Home;