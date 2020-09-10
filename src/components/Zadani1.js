import React from "react"
import data from "../data.json"
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core"
import { FormattedDate, FormattedRelativeTime } from "react-intl"

function Zadani1() {
  const Data = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Items Count</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .sort((a, b) => a.id - b.id)
            .map((element) => {
              const now = new Date()
              const updatedAt = new Date(element.updated_at)
              const diff = (updatedAt - now) / 1000

              return (
                <TableRow>
                  <TableCell>{element.id}</TableCell>
                  <TableCell>{element.name}</TableCell>
                  <TableCell>{element.items_count}</TableCell>
                  <TableCell>
                    <FormattedDate value={element.created_at}></FormattedDate>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <FormattedRelativeTime
                      value={diff}
                      numeric="auto"
                      updateIntervalInSeconds={1}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    )
  }

  return (
    <div>
      <Data />
    </div>
  )
}

export default Zadani1
