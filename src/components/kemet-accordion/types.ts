export interface KemetAccordionInterface {
  currentPanel: number,
  togglePanels: boolean,
}

export interface KemetAccordionPanelInterface {
  opened: boolean,
  maxHeight: string,
  slug: string,
}
