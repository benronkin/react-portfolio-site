import { useRef } from 'react'
import Select from 'react-select'

import './ActionBar.css'

export default function ActionBar({
  setTechnologies,
  setIndustry,
  setUseCase,
}) {
  const technologies = [
    {
      value: 'api',
      label: 'API',
    },
    {
      value: 'asana',
      label: 'Asana',
    },
    {
      value: 'calendar',
      label: 'Calendar',
    },
    {
      value: 'camera',
      label: 'Camera',
    },
    {
      value: 'crm',
      label: 'CRM',
    },
    {
      value: 'csv',
      label: 'CSV/Excel',
    },
    {
      value: 'document',
      label: 'Google Docs',
    },
    {
      value: 'drive',
      label: 'Google Drive',
    },
    { value: 'email', label: 'Email' },
    {
      value: 'form',
      label: 'Form',
    },
    {
      value: 'gcp',
      label: 'Google Cloud Platform',
    },
    {
      value: 'map',
      label: 'Map',
    },
    {
      value: 'pdf',
      label: 'PDF',
    },
    {
      value: 'report',
      label: 'Reports and dashboards',
    },
    {
      value: 'rss',
      label: 'RSS',
    },
    {
      value: 'sheet',
      label: 'Google Sheets',
    },
    {
      value: 'sidebar',
      label: 'Sidebar',
    },
    {
      value: 'slides',
      label: 'Google Slides',
    },
    {
      value: 'twitter',
      label: 'Twitter',
    },
    {
      value: 'webapp',
      label: 'Web App',
    },
    {
      value: 'xml',
      label: 'XML',
    },
    {
      value: 'yahoo',
      label: 'Yahoo',
    },
    {
      value: 'zapier',
      label: 'Zapier',
    },
  ]
  const industries = [
    { value: null, label: 'All' },
    { value: 'advertising', label: 'Advertising' },
    { value: 'construction', label: 'Construction' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'accounting', label: 'Finance and Accounting' },
    { value: 'real', label: 'Real Estate' },
    { value: 'retail', label: 'Retail' },
  ]
  const useCases = [
    { value: null, label: 'All' },
    { value: 'communication', label: 'Communication' },
    { value: 'aggregation', label: 'Data Aggregation' },
    { value: 'collection', label: 'Data Collection' },
    { value: 'sync', label: 'Data Sync' },
    { value: 'hr', label: 'Employee Management' },
    { value: 'inventory', label: 'Inventory Management' },
    { value: 'location', label: 'Location' },
    { value: 'productivity', label: 'Productivity' },
  ]
  const technologiesRef = useRef()

  function handleTechnologies(selected) {
    setTechnologies(selected.map((option) => option.value))
  }

  return (
    <div className='action-bar'>
      <label>
        <span>Technologies featured</span>
        <Select
          styles={{
            input: (base) => ({ ...base, height: '36px' }),
          }}
          ref={technologiesRef}
          onChange={handleTechnologies}
          options={technologies}
          isMulti
        />
      </label>
      <label>
        <span>Industry</span>
        <Select
          styles={{
            input: (base) => ({ ...base, height: '36px' }),
          }}
          onChange={(option) => setIndustry(option.value)}
          options={industries}
        />
      </label>
      <label>
        <span>Use case</span>
        <Select
          styles={{
            input: (base) => ({ ...base, height: '36px' }),
          }}
          onChange={(option) => setUseCase(option.value)}
          options={useCases}
        />
      </label>
    </div>
  )
}
