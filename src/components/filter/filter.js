
import { TextField,Button } from '@material-ui/core'
import './filter.css'


const Filter = () => {
    return(
        <div className={'h-filter'} >
            <TextField label="Title"
                      variant="outlined" />
            <TextField label="Rating"
                       variant="outlined" />
            <Button variant="contained"
            color="primary">Filter </Button>           
        </div>
    )
}
export default Filter