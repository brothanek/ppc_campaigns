import React, { useState } from "react"
import data from "../data.json"
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core"
import { FormattedDate, FormattedRelativeTime } from "react-intl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import SetStorage from "./utils/SetStorage"
import GetStorage from "./utils/GetStorage"

function Zadani2() {
  const [columns, setColumns] = useState(
    GetStorage("columns") || {
      id: true,
      name: true,
      items_count: true,
      created_at: true,
      updated_at: true,
      campaign_name: false,
      adgroup_name: false,
      type: false,
      adwords_status: false,
    }
  )

  const handleChange = (event) => {
    setColumns({ ...columns, [event.target.name]: event.target.checked })
    SetStorage("columns", {
      ...columns,
      [event.target.name]: event.target.checked,
    })
  }
  const Data = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            {columns.id && <TableCell>ID</TableCell>}
            {columns.name && <TableCell>Name</TableCell>}
            {columns.campaign_name && <TableCell>Campaign name</TableCell>}
            {columns.adgroup_name && <TableCell>Adgroup name</TableCell>}
            {columns.type && <TableCell>Type</TableCell>}
            {columns.adwords_status && <TableCell>Adwords status</TableCell>}
            {columns.items_count && <TableCell>Items Count</TableCell>}
            {columns.created_at && <TableCell>Created</TableCell>}
            {columns.updated_at && <TableCell>Last update</TableCell>}
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
                  {columns.id && <TableCell>{element.id}</TableCell>}
                  {columns.name && <TableCell>{element.name}</TableCell>}
                  {columns.campaign_name && (
                    <TableCell>{element.campaign_name}</TableCell>
                  )}
                  {columns.adgroup_name && (
                    <TableCell>{element.adgroup_name}</TableCell>
                  )}
                  {columns.type && <TableCell>{element.type}</TableCell>}
                  {columns.adwords_status && (
                    <TableCell>{element.adwords_status}</TableCell>
                  )}
                  {columns.items_count && (
                    <TableCell>{element.items_count}</TableCell>
                  )}
                  {columns.created_at && (
                    <TableCell>
                      <FormattedDate value={element.created_at}></FormattedDate>
                    </TableCell>
                  )}
                  {columns.updated_at && (
                    <TableCell>
                      <FormattedRelativeTime
                        value={diff}
                        numeric="auto"
                        updateIntervalInSeconds={1}
                      />
                    </TableCell>
                  )}
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    )
  }

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox disabled checked={true} name="id" color="primary" />
          }
          label="ID"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.name}
              onChange={handleChange}
              name="name"
              color="primary"
            />
          }
          label="Name"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.campaign_name}
              onChange={handleChange}
              name="campaign_name"
              color="primary"
            />
          }
          label="Campaign name"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.adgroup_name}
              onChange={handleChange}
              name="adgroup_name"
              color="primary"
            />
          }
          label="Adgroup name"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.type}
              onChange={handleChange}
              name="type"
              color="primary"
            />
          }
          label="Type"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.adwords_status}
              onChange={handleChange}
              name="adwords_status"
              color="primary"
            />
          }
          label="Adwords status"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.items_count}
              onChange={handleChange}
              name="items_count"
              color="primary"
            />
          }
          label="Items count"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.created_at}
              onChange={handleChange}
              name="created_at"
              color="primary"
            />
          }
          label="Created at"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={columns.updated_at}
              onChange={handleChange}
              name="updated_at"
              color="primary"
            />
          }
          label="Updated at"
        />
      </FormGroup>
      <Data />
    </div>
  )
}

export default Zadani2
