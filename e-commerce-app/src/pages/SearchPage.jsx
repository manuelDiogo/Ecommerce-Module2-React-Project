import { useParams } from "react-router-dom"
import { Box } from "@chakra-ui/react"


function SearchPage() {
    const {term} = useParams()


    return (
       <Box mt="500px">
            {term}
       </Box>
    )
}

export default SearchPage