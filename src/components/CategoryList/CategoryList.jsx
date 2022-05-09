import Button from '@mui/material/Button';

export default function CategoryList({ categories, activeCat, setActiveCat }){
    const cats = categories.map(category =>
      <Button
       key={category}
       className={category === activeCat ? 'active' : ''}
       onClick={() => setActiveCat(category)}
       sx={{ fontSize: ['10px', '15px', '20px'] }}
       >
         {category}
       </Button>
      )
    return(
      <div id="category-links">
        { cats }
      </div>
    );
};