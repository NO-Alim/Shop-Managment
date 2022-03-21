import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FiPrinter, FiSearch } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/ListHeader.module.scss';
const ListHeader = () => {
  const options = [
    { value: 'date', label: 'Date' },
    { value: 'price', label: 'Price' },
  ];

  const [selectCount, setSelectCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setsearchResult] = useState([]);
  const {
    checkedItems,
    setCheckedItems,
    DeleteList,
    data,
    Delete,
    modalIsOpen,
    setIsOpen,
    currentItem,
    setCurrentItem,
  } = useGlobalContext();

  const openModal = () => {
    setIsOpen(true);
  };

  const handleDelete = async () => {
    //delete from server
    DeleteList(checkedItems);
    //setArray 0
    setCheckedItems([]);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);

    if (e.target.value) {
      const filteredData = data.filter((item) =>
        item.name.includes(e.target.value)
      );
      setsearchResult(filteredData);
    } else {
      setsearchResult([]);
    }
    console.log(searchResult);
  };
  return (
    <>
      <div className={classes.listHeader}>
        <div className={classes.doSomething}>
          <div className={classes.selectCount}>
            <span>
              {`${checkedItems ? checkedItems.length : 0}`} Product Selected
            </span>
          </div>
          <div className={classes.icons}>
            <span className="icon">
              <i>
                <FiPrinter />
              </i>
            </span>
            <span className="icon" onClick={handleDelete}>
              <i>
                <RiDeleteBin6Line />
              </i>
            </span>
          </div>
        </div>
        <div className={classes.userControl}>
          {/* <div className={classes.sort}>
            <SelectOption options={options} placeholder={'sort'} />
          </div> */}
          <form>
            <button>
              <FiSearch />
            </button>
            <input
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => handleChange(e)}
              placeholder="Search Product"
            />
          </form>
        </div>
      </div>
      {searchResult && searchResult.length > 0 && (
        <div className={classes.searchResult}>
          <ul className={classes.searchUl}>
            {searchResult.map((item) => {
              return (
                <li className={classes.searchLi} key={item.time.seconds}>
                  <span>
                    {item.name.replace(/^(.{5}[^\s]*).*/, '$1') + ''}...
                  </span>

                  <span
                    className={`${classes.price} ${
                      item.expanse ? 'ex-price' : ''
                    }`}
                  >
                    {`${item.expanse ? '-' : ' '}`}$
                    {parseFloat(item.price).toFixed(2)}
                  </span>

                  <div className={classes.btnGroup}>
                    <span
                      onClick={() => {
                        openModal();
                        setCurrentItem(item);
                      }}
                    >
                      <i>
                        <FaEdit />
                      </i>
                    </span>
                    <span onClick={() => Delete(item.time.seconds)}>
                      <i>
                        <RiDeleteBin6Line />
                      </i>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ListHeader;
